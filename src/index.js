//import _ from 'lodash';
import css from './index.css';
const a = 1;

console.log(css);
//console.log(_);


const button = document.getElementById('button');
button.addEventListener('click', () => {
    console.log('click');
    
    asyncloadLib();
    
});

function loadLib(){
    
    import(/* webpackPrefetch: true, webpackChunkName: "lodash" */ 'lodash').then((mod) => {
        console.log('loaded', mod);

        const _ = mod.default;

        alert(_.trim('                   hi                      '));
    });
}

async function asyncloadLib(){
    
    const module = await import(/* webpackPrefetch: true, webpackChunkName: "lodash" */ 'lodash');
    
    module.default;
    console.log('loaded', module);

    const _ = module.default;

    alert(_.trim('                   hi                      '));
}