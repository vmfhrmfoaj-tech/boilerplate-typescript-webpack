class A {
    run(){
        console.log('A run');
        import('./math').then( m => {
            console.log('math loaded ', m);
        })
    }
}


export default A;