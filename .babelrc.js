module.exports = function(api){
    api.cache(true);

    const presets = [
        [
            '@babel/env',
            {
              corejs:"3",
              modules: false,
              useBuiltIns: 'usage',
              targets: '> 0.25%, not dead',
            },
        ],
        [
            '@babel/preset-typescript'
        ]
    ];

    const plugins= [
    ];

    return {
      presets,
      plugins
    }
}