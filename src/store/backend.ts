import simpleDDP from 'simpleddp'; // ES6
import ws from 'isomorphic-ws';
import { simpleDDPLogin } from 'simpleddp-plugin-login'
import { makeObservable, observable, runInAction } from 'mobx';

export default class Backend {

    server: any
    items: any[] = []
    tempItems: any[] = [];
    
    price: any[] = []
    tempPrice: any[] = [];
    
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
                // this.server.collection('products').onChange(({ prev, next }: { prev: any, next: any }) => {
                //     console.log('previus user data', prev);
                //     console.log('next user data', next);
                // })
                this.server.collection('products').onChange((a: any) => {

                  //  a.added.id.push(items)
                    this.tempItems.push(a.added.Name)
                    this.tempPrice.push(a.added.Price)
                    
                    console.log('id = ', a);
                    console.log("name = ", a.added.id);
                    console.log('price = ', a.added.Price);
                })
            }
        )();

        makeObservable(this, {items: observable})
        makeObservable(this, {price: observable})
        
    }
    async fetch() {
        let userSub = this.server.subscribe("products");
        await userSub.ready();

        runInAction(() => {
            this.items = this.tempItems
            this.price = this.tempPrice
        })
    }
    getItem(){
        
    }

}