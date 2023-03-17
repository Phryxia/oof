'use strict';

function oof(f) {
    const ff = (...params)=>f(...params);
    ff.compose = (g)=>{
        return oof((...params)=>g(f(...params)));
    };
    return ff;
}

exports.oof = oof;
