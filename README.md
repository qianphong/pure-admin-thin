# pure-admin-thin

## 介绍

根据开发需求对 [pure-admin-thin](https://github.com/pure-admin/pure-admin-thin) 进行精简，使用请参考[官方文档](https://yiming_chang.gitee.io/pure-admin-doc/)

> 非常感谢 [pure-admin](https://github.com/pure-admin) 团队提供的管理后台模板。

## 主要改动

1. 删除 stylelint 相关
2. 删除 commitlint 相关，lint-staged、husky
3. 删除 mock 功能
4. 删除 Docker 相关
5. 删除`echarts`相关代码，如需使用请引入`vue-echarts`
6. 引入个人工具库 `@qianphong/utils/`，提供 http 请求、API 自动生成、数据加密、持久化存储等功能
7. 重构 `store/modules/user.ts` 更符合项目业务逻辑
