import * as pt from "pareto-core-types"

import * as uast from "api-untyped-ast"

export type File = {
    fullPath: string
    root: uast.TUntypedNode
}

export type Location = {
    line: number
    column: number
}

export type TypeScriptParserError =
    | ["tsconfg.json does not exist", {}]

export type Path = pt.Nested<string>

export type Parse = (
    $: {
        tsconfigPath: Path
    },
    $i: {
        onError: ($: TypeScriptParserError) => void
        onFile: ($: {
            path: string,
            data: File
        }) => void
        onEnd: () => void
    }
) => pt.AsyncNonValue