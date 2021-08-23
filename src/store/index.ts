import simpleDDP from 'simpleddp'; // ES6
import ws from 'isomorphic-ws';
import { simpleDDPLogin } from 'simpleddp-plugin-login'

export default class Backend {

    server: any

    constructor() {
        let opts = {
            endpoint: "ws://cloud.astrapos.ru/websocket",
            SocketConstructor: ws,
            reconnectInterval: 3000
        };
        this.server = new simpleDDP(opts, [simpleDDPLogin]);

        (
            async () => {
                let userAuth = await this.server.login({
                    password: '1234',
                    user: {
                        username: '9049915511',
                    }
                })
                console.log('userAuth', userAuth)
                this.server.collection('products').onChange(({ prev, next }: { prev: any, next: any }) => {
                    console.log('previus user data', prev);
                    console.log('next user data', next);
                })
                this.server.collection('products').onChange((a:any) => {
                    console.log('previus user data', a);
                    console.log('next user data', a);
                })
            })();
    }
    async fetch() {
        let userSub = this.server.subscribe("products");
        await userSub.ready();
    }
}