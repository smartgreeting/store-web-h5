/*
 * @Author: lihuan
 * @Date: 2022-01-08 00:07:00
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-08 18:38:37
 * @Email: 17719495105@163.com
 */
import styled from "styled-components";
import seckill from '@/assets/images/seckill.png'

export const SeckillWrapper = styled.div`
  background-color:#fff;
  .top {
    width: 355px;
    height:34px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABYwAAACQBAMAAABZrTKvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUdwTO0PD+wQEOwVFewREekNDewQEOsQEC1iODQAAAAIdFJOUwB9YxIrs0VtoD6UjwAAA/1JREFUeNrt3cGO22QUBeAprsq2qSjdUks420gOsG0VK/sBjdiWEHnNmPeXsP94aIJEQExvmWt9n/oEZ46u72877s3NVa/vPrq9gZTOa3wnDnK6U2PUGJ7YUmE3Ro3h//LtWY1/FAc5fXdW45/EQU7Pzmr8Uhzk9Pysxu/EQfrl+GdhkH+rsFOQVvVwy+12IwzS+nKu8W+iILH3pcVfCYLU9q/vbn8VAwAAAAAAAJ/I88P9m+adHMjs+1XhQSqJvVjNPsiCrKq3DzV+tZEGSf2w+tPv0iDpML7/WOM3xjE5fbE68408SOmX8xp/LQ9S7hSrC7YKMnpxWeMPEiGhZ5c1fikREnp/WWM/7CX9Cc8Zj5zeXtb4lURI6P6yxm8kQkKrv5AI+WtsGmOpAEc8+G/ccGMBPP5gATyMZgG8GsQCeFGTxZ3xnPDIyY+YWMJW4SelLIAf+LOEcexzKyyAj1+xBD5FyBL4MCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkNtGBKQvcVvpMclV7UQOZG/xrt2Yx+ReKbbddtdWkiDxMK623WhnqyD1TtEVtmOS13g/1dhyTF7jZtwd97YKstd4P/XYNGYB07gzjUld4+PUY0sFdmOwG8NVVVVdfdD8cN/YNObp2pT3fjbXa2w15mnP4nZXJu2VkrZlHO+8G8TTncXj5lvOb5srTd9Oj6K1+HFJb8yBuGG87fpJd30cT7zh9qiLnle2I9Pt+sOhrqce/21NN9U/bM/8ixZ31y95PEK73ff1pDnurp3yKn+AR+ZcVjfzOGwY16ca90cRR+a8Hze3Y2czi5kS+0M99/ho4Ia1uCoXvWa85JkVIde6aRgPw9TjfqfGYcN4Xt16syIk324cxkO9Xq/HWdFJOCrm7XzROxzNipApMcY7dbhE7IIXetE7XfKE/OlNU2Jd1ophulchkKAad2UYj7tb76XtkBqfOrye9mM1jpwW80VPyBE723ixW0//hnLBk0jctFiXo7RLXlSNh3FMTNO46Xduakad8OoyjdemccyYKPfb6hKwhENjHoYSslkROI2n7dhSERpzWd0cQCKXtnU5RUs4cqkoB2khB+V7OAU8Tgqnj9BpMZwOIEIO0J7uG5d7QY3HH3E1Lg9LB9M4qMbdfENz3Np6D6MjYy5XvLrx+CPm8HEo71ScXg3S46CYu3J/fl033r8Kybc9Lcdevoo+g/ReDQq93PXzC8ee9odOCy9qhua7nWvce/cqclqM47iZWizkoB53/Vjkpul92yo25vlHTEKOmRPtww/8BRw6juevgYgiaq0YAz52fuwYHrMWx17vfEHhM8RcvvXh/ywODli+8TnLQMAAAADwWfwBKZghRTcFaz4AAAAASUVORK5CYII=) no-repeat;
    background-size:contain;
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin: 0 10px;

    .left {
      flex: 2;
      .title{
        font-size:15px;
        font-family: PingFangSC-Semibold;
        }

      .time{
        position:relative;
        left:5px;

        .time-l{
          color:#fa2c19;
          font-size:16px;
        }
        .time-r{
          margin-left:15px;
          .seckill-time {
              display: inline-block;
              width: 18px;
              height:24px;
              color: #fff;
              background-image: linear-gradient(-140deg,#ff6152,#fa2c19);
              background-color: #fa2c19;
              border-radius: 5px;
              text-align: center;
              line-height:24px;
              font-weight: 400;
          }
           .seckill-time-separator {
                display: inline-block;
                height: 100%;
                line-height: 1.4;
                font-size: 16px;
                text-align: center;
                font-family: PingFangSC-Regular;
                color: #f2270c;
                letter-spacing: 0;
                font-weight: 700;
                margin:0 2px;
            }
        }
      }
      .time-l::after {
        width:20px;
        height:18px;
        content:'';
        display: inline-block;
        vertical-align: middle;
        background-image:url(${seckill});
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: contain;
      }
    }
    .right {
      flex:1;
      text-align: right;
      color: #f2270c;
      font-size:13px;
      .more{
        display: inline-block;
        width:13px;
        height:13px;
        border-radius:100%;
        text-align: center;
        line-height:13px;
        background-color: #f2270c;
        position:relative;
        margin-left:3px;
        top:2px;
      }
    }
  }

.bottom {
  display: flex;
  justify-content:space-around;
  padding-top:20px;
  .item{
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    width:57px;
    height: 77px;

      img{
        widows: 55px;
        height: 55px;
      }
      .title {
        text-align: center;
        color: #f2270c;
        font-family: PingFangSC-Regular;
        font-weight: 600;
        em {
          margin-right:1px;
          font-size:12px;
        }
      }

    }
  }
`

