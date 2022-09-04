import * as pt from "pareto-core-types"

import * as uast from "api-untyped-ast"

export type TFile = {
    fullPath: string
    root: uast.TUntypedNode
}

export type TLocation = {
    line: number
    column: number
}

export type TTypeScriptParserError =
    | ["tsconfg.json does not exist", {}]

export type TPath = pt.Nested<string>

export type XParse = (
    $: {
        tsconfigPath: TPath
    },
    $i: {
        onError: ($: TTypeScriptParserError) => void
        onFile: ($: {
            path: string,
            data: TFile
        }) => void
        onEnd: () => void
    }
) => pt.AsyncNonValue


/**
 * The parser does not strip the quotes of a StringLiteral, but that needs to be done somewhere
 * As this wrapper is agnostic about StringLiterals, it cannot do it, but it can provide a function that can be used by a consumer
 * 
 */
 export type FStripQuotes = ($: string) => string
 //export type FHasConstFlag = ($: uast.TUntypedNode) => boolean