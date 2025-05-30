#!/bin/bash

# NPM 发布脚本
# 用于将 misonote-mcp 发布到 NPM 平台

set -e

echo "🚀 准备发布 misonote-mcp 到 NPM..."

# 检查是否已登录 NPM
echo "📋 检查 NPM 登录状态..."
if ! npm whoami > /dev/null 2>&1; then
    echo "❌ 未登录 NPM，请先运行: npm login"
    exit 1
fi

echo "✅ NPM 登录状态正常"

# 检查包名是否可用
echo "📋 检查包名可用性..."
if npm view misonote-mcp > /dev/null 2>&1; then
    echo "⚠️  包名 'misonote-mcp' 已存在，将发布新版本"
else
    echo "✅ 包名 'misonote-mcp' 可用"
fi

# 运行测试（如果有）
echo "🧪 运行测试..."
npm test || echo "⚠️  测试失败或未配置测试"

# 检查文件
echo "📋 检查发布文件..."
if [ ! -f "misonote-mcp-client.js" ]; then
    echo "❌ 主文件 misonote-mcp-client.js 不存在"
    exit 1
fi

if [ ! -f "README.md" ]; then
    echo "❌ README.md 不存在"
    exit 1
fi

echo "✅ 发布文件检查通过"

# 显示将要发布的文件
echo "📦 将要发布的文件:"
npm pack --dry-run

# 确认发布
echo ""
echo "🔍 请确认以下信息:"
echo "包名: $(node -p "require('./package.json').name")"
echo "版本: $(node -p "require('./package.json').version")"
echo "描述: $(node -p "require('./package.json').description")"
echo ""

read -p "确认发布? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ 取消发布"
    exit 1
fi

# 发布到 NPM
echo "🚀 发布到 NPM..."
npm publish

echo ""
echo "🎉 发布成功！"
echo ""
echo "📦 安装命令:"
echo "npm install -g misonote-mcp"
echo "pnpm add -g misonote-mcp"
echo "yarn global add misonote-mcp"
echo ""
echo "🔗 NPM 页面:"
echo "https://www.npmjs.com/package/misonote-mcp"
echo ""
echo "✨ 用户现在可以通过以下方式使用:"
echo "1. 全局安装: npm install -g misonote-mcp"
echo "2. 在 Cursor 中配置: \"command\": \"misonote-mcp\""
echo ""
