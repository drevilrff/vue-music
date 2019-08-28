<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-15 17:51:22
 * @LastEditTime: 2019-08-28 22:37:40
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="recommend">
    <scroll ref="scroll" class="recommend-content" :data="distList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper">
          <slider>
            <div v-for="item in recommends">
              <a :href="item.linkUrl">
                <img class="needsclick" @load="loadImage" :src="item.picUrl" :key="item.id" />
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li class="item" v-for="(item, index) in distList" :key="index">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.cover" />
              </div>
              <div class="text">
                <h2 class="name" v-html="item.title"></h2>
                <p class="desc">
                  <span>播放量：{{ _toDecimal(item.listen_num, 10000) }}万</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!distList.length">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import Loading from "base/loading/loading"
import Scroll from "base/scroll/scroll";
import Slider from "base/slider/slider";
import { getRecommend, getDistList } from "api/recommend";
import { toDecimal } from "common/js/decimal";
import { ERR_OK } from "api/config";

export default {
  data() {
    return {
      recommends: [],
      distList: []
    };
  },
  components: {
    Slider,
    Scroll,
    Loading
  },
  created() {
    this._getRecommend();
    this._getDistList();
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider;
        }
      });
    },
    _getDistList() {
      getDistList()
        .then(res => {
          if (res.code === ERR_OK) {
            this.distList = res.data.v_hot;
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    _toDecimal(number, units, bit) {
      return toDecimal(number, units, bit);
    },
    loadImage() {
      if (!this.checkLoaded) {
        this.$refs.scroll.refresh();
        this.checkLoaded = true;
      }
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';

.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }

      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;

          .name {
            margin-bottom: 10px;
            color: $color-text;
          }

          .desc {
            color: $color-text-d;
          }
        }
      }
    }

    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>