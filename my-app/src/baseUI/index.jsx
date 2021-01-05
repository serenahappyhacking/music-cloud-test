/*
    采用 better-scroll 打造了移动端滑动基础组件，不仅仅可以用在本项目，也可以直接移植到其他所有的移动端 React 项目

    继续用function component 封装 Scroll, 作为一个通用组件，会经常被取到原生 DOM 对象, 而 function component 不具备被上层组件直接用 ref 调用的条件，
    所以用 forwardRef 包裹。
*/

const { forwardRef } = require('react')

const Scroll = forwardRef((props, ref) => {})

Scroll.propTypes = {
    direction: PropTypes.oneOf(['vertical', 'horizental']), // 滚动的方向
    click: true, // 是否支持点击
    refresh: PropTypes.bool, // 是否刷新
    onScroll: PropTypes.func, // 滑动触发的回调函数
    pullUp: PropTypes.func, // 上拉加载逻辑
    pullDown: PropTypes.func, // 下拉加载逻辑
    pullUpLoading: PropTypes.bool, // 是否显示上拉 loading 动画
    pullDownLoading: PropTypes.bool, // 是否显示下拉 loading 动画
    bounceTop: PropTypes.bool, // 是否支持向上吸顶
    bounceBottom: PropTypes.bool, // 是否支持向下吸底
}

Scroll.defaultProps = {
    direction: 'vertical',
    click: true,
    refresh: true,
    onScroll: null,
    pullUpLoading: false,
    pullDownLoading: false,
    pullUp: null,
    pullDown: null,
    bounceTop: true,
    bounceBottom: true,
}

<input type="text" />
       type="checkbox"
       type="radio"
       type="email"
