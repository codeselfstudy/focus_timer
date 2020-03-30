import { chunk } from "lodash";

/**
 * Take a hex color (like `#014872`) and return it as a decimal string
 * (e.g., `"001-072-114"`) that can be used as an easily sortable object
 * key.
 */
export function hexToDecStr(hx) {
    const color = normalizeColor(hx);
    return chunk(color, 2)
        .map(s =>
            parseInt(s, 16)
                .toString()
                .padStart(3, "0")
        )
        .join("-");
}

export function mapColorsToObj(cs) {
    const obj = {};
    for (let i = 0; i < cs.length; i++) {
        const k = hexToDecStr(cs[i]);
        obj[k] = cs[i];
    }
    return obj;
}

function normalizeColor(code) {
    return expandShorthand(removeHash(code));
}

function removeHash(code) {
    return code[0] === "#" ? code.slice(1) : code;
}

function expandShorthand(code) {
    if (code.length === 3) {
        const [a, b, c] = code.split("");
        return `${a}${a}${b}${b}${c}${c}`;
    } else {
        return code;
    }
}
