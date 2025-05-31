#!/usr/bin/env node

/**
 * 测试 MCP 客户端的错误处理
 */

const axios = require('axios');

// 模拟不同的错误情况
async function testErrorHandling() {
  console.log('🧪 测试 MCP 客户端错误处理\n');

  // 测试 1: 连接拒绝错误
  console.log('1️⃣ 测试连接拒绝错误...');
  try {
    await axios.get('http://localhost:9999/api/test');
  } catch (error) {
    console.log('错误类型:', error.code);
    console.log('错误消息:', error.message);
    console.log('');
  }

  // 测试 2: 超时错误
  console.log('2️⃣ 测试超时错误...');
  try {
    await axios.get('http://httpstat.us/200?sleep=15000', { timeout: 1000 });
  } catch (error) {
    console.log('错误类型:', error.code);
    console.log('错误消息:', error.message);
    console.log('');
  }

  // 测试 3: 404 错误
  console.log('3️⃣ 测试 404 错误...');
  try {
    await axios.get('http://httpstat.us/404');
  } catch (error) {
    console.log('状态码:', error.response?.status);
    console.log('状态文本:', error.response?.statusText);
    console.log('响应数据:', error.response?.data);
    console.log('');
  }

  // 测试 4: 401 错误
  console.log('4️⃣ 测试 401 错误...');
  try {
    await axios.get('http://httpstat.us/401');
  } catch (error) {
    console.log('状态码:', error.response?.status);
    console.log('状态文本:', error.response?.statusText);
    console.log('');
  }

  // 测试 5: 500 错误
  console.log('5️⃣ 测试 500 错误...');
  try {
    await axios.get('http://httpstat.us/500');
  } catch (error) {
    console.log('状态码:', error.response?.status);
    console.log('状态文本:', error.response?.statusText);
    console.log('');
  }

  console.log('✅ 错误处理测试完成');
}

if (require.main === module) {
  testErrorHandling().catch(console.error);
}

module.exports = { testErrorHandling };
