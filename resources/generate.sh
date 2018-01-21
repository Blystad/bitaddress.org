#!/bin/bash

echo "QTUM_PAPER_WALLET_IMAGE = 'data:image/png;base64,$(base64 -w 0 QtumPaper.png)'" > qtum.images.js
echo "QTUM_LOGO_IMAGE = 'data:image/png;base64,$(base64 -w 0 QtumPaperLogo.png)'" >> qtum.images.js
