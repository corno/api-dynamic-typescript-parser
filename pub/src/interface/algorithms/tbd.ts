import * as pt from "pareto-core-types"
import { TFile, TPath, TTypeScriptParserError } from "../types/all"

export type PParse = (
    $: {
        readonly "tsconfigPath": TPath
    },
    $i: {
        readonly "onError": ($: TTypeScriptParserError) => void
        readonly "onFile": ($: {
            readonly "path": string,
            readonly "data": TFile
        }) => void
        readonly "onEnd": () => void
    },
    $a: pt.ProcessAsyncValue
) => void


/**
 * The parser does not strip the quotes of a StringLiteral, but that needs to be done somewhere
 * As this wrapper is agnostic about StringLiterals, it cannot do it, but it can provide a function that can be used by a consumer
 * 
 */
export type FStripQuotes = ($: string) => string
 //export type FHasConstFlag = ($: uast.TUntypedNode) => boolean