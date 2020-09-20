const postcss = require('postcss');

const plugin = require('./index.js');

/**
 * @param {string} input
 * @param {string} output
 * @param {Object} options
 * @return {Promise<void>}
 */
function run(input, output, options) {
    return postcss([ plugin(options) ]).process(input, { from: undefined })
        .then(function(result) {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}


it('fallback `break-inside` with `page-break-inside`', function() {
    return run(
        'a{ break-inside: avoid; }',
        'a{ page-break-inside: avoid; break-inside: avoid; }',
        {},
    );
});

it('fallback `break-after` with `page-break-after`', function() {
    return run(
        'a{ break-after: avoid; }',
        'a{ page-break-after: avoid; break-after: avoid; }',
        {},
    );
});

it('fallback `page` and `avoid-page` values with `always` and `avoid`', function() {
    return run(
        'a{ break-before: page; break-after: avoid-page; }',
        'a{ page-break-before: always; break-before: page; page-break-after: avoid; break-after: avoid-page; }',
        {},
    );
});

it('do not process `column|region` related `break-` properties', function() {
    return run(
        'a{ break-inside: column; break-after: avoid-region; }',
        'a{ break-inside: column; break-after: avoid-region; }',
        {},
    );
});

