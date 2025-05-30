# 📦 发布指南

本文档说明如何将 `misonote-mcp` 发布到各个包管理平台。

## 🚀 NPM 发布

### 前置条件

1. **NPM 账户**: 确保有 NPM 账户
2. **登录状态**: 在本地登录 NPM

```bash
# 登录 NPM
npm login

# 验证登录状态
npm whoami
```

### 发布步骤

#### 方法一：使用发布脚本（推荐）

```bash
# 运行发布脚本
./scripts/publish-npm.sh
```

#### 方法二：手动发布

```bash
# 1. 检查包信息
npm pack --dry-run

# 2. 运行预发布检查
npm run prepublishOnly

# 3. 发布到 NPM
npm publish

# 4. 验证发布
npm view misonote-mcp
```

### 发布后验证

```bash
# 全局安装测试
npm install -g misonote-mcp

# 验证命令可用
misonote-mcp --help

# 卸载测试包
npm uninstall -g misonote-mcp
```

## 🍺 Homebrew 发布

### 创建 Homebrew Formula

1. **Fork homebrew-core 仓库**
2. **创建 formula 文件**

```ruby
# Formula/misonote-mcp.rb
class MisonoteMcp < Formula
  desc "MCP client for Misonote Markdown documentation system"
  homepage "https://github.com/leeguooooo/misonote-mcp-client"
  url "https://registry.npmjs.org/misonote-mcp/-/misonote-mcp-1.0.0.tgz"
  sha256 "YOUR_SHA256_HERE"
  license "MIT"

  depends_on "node"

  def install
    system "npm", "install", *Language::Node.std_npm_install_args(libexec)
    bin.install_symlink Dir["#{libexec}/bin/*"]
  end

  test do
    system "#{bin}/misonote-mcp", "--version"
  end
end
```

3. **提交 Pull Request**

### 或者创建自定义 Tap

```bash
# 创建自定义 tap
brew tap-new leeguooooo/misonote

# 创建 formula
brew create --tap leeguooooo/misonote https://registry.npmjs.org/misonote-mcp/-/misonote-mcp-1.0.0.tgz
```

## 📋 版本管理

### 版本号规则

遵循 [Semantic Versioning](https://semver.org/):

- **MAJOR**: 不兼容的 API 更改
- **MINOR**: 向后兼容的功能添加
- **PATCH**: 向后兼容的错误修复

### 发布新版本

```bash
# 更新版本号
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0

# 推送标签
git push --tags

# 发布新版本
npm publish
```

## 🔍 发布检查清单

### 发布前检查

- [ ] 代码已提交并推送到 GitHub
- [ ] README.md 已更新
- [ ] package.json 信息正确
- [ ] 版本号已更新
- [ ] 测试通过
- [ ] 文档完整

### 发布后检查

- [ ] NPM 页面显示正常
- [ ] 全局安装测试成功
- [ ] 命令行工具可用
- [ ] Cursor 配置测试成功
- [ ] 文档链接有效

## 🌐 平台链接

### NPM
- **包页面**: https://www.npmjs.com/package/misonote-mcp
- **安装命令**: `npm install -g misonote-mcp`

### GitHub
- **仓库**: https://github.com/leeguooooo/misonote-mcp-client
- **发布页面**: https://github.com/leeguooooo/misonote-mcp-client/releases

### Homebrew (计划中)
- **安装命令**: `brew install misonote-mcp`

## 📞 支持

如果在发布过程中遇到问题：

1. 检查 NPM 登录状态
2. 验证包名可用性
3. 确认网络连接
4. 查看 NPM 日志文件

---

**Happy Publishing! 🚀**
