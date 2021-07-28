//import _ from 'lodash';
import css from './index.css';
const a = 1;

console.log(css);
//console.log(_);


const button = document.getElementById('button');
button.addEventListener('click', () => {
    console.log('click');
    import(/* webpackPrefetch: true, webpackChunkName: "lodash" */ 'lodash').then((mod) => {
        console.log('loaded', mod);

        const _ = mod.default;

        alert(_.trim('                   hi                      '));
    });
});