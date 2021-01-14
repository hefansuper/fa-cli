/*
 * @Author: stephenHe
 * @Date: 2021-01-08 11:02:51
 * @LastEditors: stephenHe
 * @LastEditTime: 2021-01-12 11:45:24
 * @Description:  eslint 的配置文件。
 * @FilePath: /my-cli-app/.eslintrc.js
 */

module.exports = {
    root: true,
    parser: "@typescript-eslint/parser", // 使用 ESLint 解析 TypeScript 语法
    // 插件
    plugins: [
        // 配置 TypeScript 校验规则
        "@typescript-eslint"
    ],
    // 使用共享规则。
    extends: [
        // ESLint 内置的推荐校验规则配置
        "eslint:recommended",
        // TypeScript 推荐校验规则配置
        "plugin:@typescript-eslint/recommended",
        // 用于关闭 ESLint 相关的格式规则集，具体可查看 https://github.com/prettier/eslint-config-prettier/blob/master/index.js
        "prettier",
        // 用于关闭 @typescript-eslint/eslint-plugin 插件相关的格式规则集，具体可查看 https://github.com/prettier/eslint-config-prettier/blob/master/%40typescript-eslint.js
        "prettier/@typescript-eslint",
        "airbnb",
        "airbnb/hooks"
    ],
};