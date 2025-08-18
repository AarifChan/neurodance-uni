#!/bin/bash


WEBHOOK_URL="https://open.feishu.cn/open-apis/bot/v2/hook/f306b959-cfcc-44dd-ae0f-fd1f3518a46a"

# 记录开始时间
start_time=$(date +%s)

# 运行主任务
{
    git pull
    node -v
    npm -v
    pnpm -v
    rm -rvf dist/dist/h5
    pnpm install
    pnpm run build:h5
    tar -czvf ./dist.tar.gz --no-xattrs dist/build/h5/
    scp ./dist.tar.gz sw:/home/dev/h5/
    ssh sw "/home/dev/h5/run-web.sh"
    rm -rf ./dist.tar.gz
}
status=$?  # 记录退出状态（0=成功，非0=失败）

# 记录结束时间
end_time=$(date +%s)
elapsed=$((end_time - start_time))

# 格式化耗时
minutes=$((elapsed / 60))
seconds=$((elapsed % 60))
duration="${minutes}分${seconds}秒"

# 发送 webhook
if [ $status -eq 0 ]; then
  message="✅ 【枕月H5】正式环境部署成功，用时 ${duration}"
else
  message="❌ 【枕月H5】正式环境失败，用时 ${duration}"
fi

curl -s -X POST "$WEBHOOK_URL" \
  -H "Content-Type: application/json" \
-d '{
        "msg_type": "text",
	    "content": {
                "text": "'"$message"'"
            }
        }'

# 保证脚本退出码与实际执行一致
exit $status
