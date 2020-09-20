module.exports = function(options) {
    return {
        postcssPlugin: 'postcss-page-break',
        Root(root) {
            root.walkDecls(/^break-(inside|before|after)/, function(decl) {
                // do not process column|region related properties
                if (decl.value.search(/column|region/) >= 0) {
                    return;
                }

                let newValue;
                switch (decl.value) {
                    case 'page':
                        newValue = 'always';
                        break;
                    case 'avoid-page':
                        newValue = 'avoid';
                        break;
                    default:
                        newValue = decl.value;
                }

                decl.cloneBefore({
                    prop: 'page-' + decl.prop,
                    value: newValue,
                });
            });
        },
    };

};
module.exports.postcss = true;
