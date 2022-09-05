import * as pt from "pareto-core-types"

import * as uast from "api-untyped-ast"

export type TFile = {
    readonly "fullPath": string
    readonly "root": uast.TUntypedNode
}

export type TLocation = {
    readonly "line": number
    readonly "column": number
}

export type TTypeScriptParserError =
    | ["tsconfg.json does not exist", {}]

export type TPath = pt.Nested<string>
