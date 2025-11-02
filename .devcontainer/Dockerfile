FROM mcr.microsoft.com/devcontainers/base:ubuntu

# 基本ツール
RUN apt-get update && apt-get install -y git curl

# Node.js 20 をインストール
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

WORKDIR /workspace
