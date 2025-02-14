import ts from "typescript";
import { Context } from "../NodeParser";
import { SubNodeParser } from "../SubNodeParser";
import { BaseType } from "../Type/BaseType";
import { StringType } from "../Type/StringType";

export class StringTypeNodeParser implements SubNodeParser {
    public supportsNode(node: ts.KeywordTypeNode | ts.TemplateExpression): boolean {
        return node.kind === ts.SyntaxKind.StringKeyword || node.kind === ts.SyntaxKind.TemplateExpression;
    }

    public createType(node: ts.KeywordTypeNode, context: Context): BaseType {
        return new StringType();
    }
}
