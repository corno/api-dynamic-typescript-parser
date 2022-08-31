import * as pt from "pareto-core-types"

import * as uast from "api-untyped-ast"

export type File<NodeImplementationDetails>  = {
    fullPath: string
    root: uast.TUntypedNode<NodeImplementationDetails>
}

export type Location = {
    line: number
    column: number
}

export type GetLocation<NodeImplementationDetails> = (
    $: NodeImplementationDetails
) => Location

export type Path = pt.Nested<string>

export type Parse<NodeImplementationDetails> = (
    $: {
        tsconfigPath: Path
    },
    $i: {
        onFile: ($: {
            path: string,
            data: File<NodeImplementationDetails>
        }) => void
        onEnd: () => void
    }
) => pt.AsyncNonValue