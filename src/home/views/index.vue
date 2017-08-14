<template>
    <div>
        <div id='slider' class='calendar'>
            {{year}} - {{month}}
            <div class="calendar-week calendar-week-title">
                <div class="color-theme">日</div>
                <div>一</div>
                <div>二</div>
                <div>三</div>
                <div>四</div>
                <div>五</div>
                <div class="color-theme">六</div>
            </div>
            <transition-group tag="div" class="calendar-month-wrap" :name="swipe_direction">
                <div class="calendar-month" v-for="month,index in months" :key="month.date">
                    <transition-group tag="ul" name="fade">
                        <li v-show="view=='month' || (view=='week' && idx==1)" class="calendar-week"
                            v-for="r,idx in month.list.length/7" :key="r">
                            <div v-for="t in 7" :class="month.list[(r - 1) * 7 + t - 1].cls">
                                {{ month.list[(r - 1) * 7 + t - 1].day }}
                            </div>
                        </li>
                    </transition-group>
                </div>
            </transition-group>
        </div>

    </div>
</template>
<script>

    import '../css/calendar.less'
    import Hammer from  'hammerjs'

    export default {
        data: function () {
            return {
                year: 2017,
                month: 8,
                swipe_direction: '',
                months: [],
                view: 'month'
            }
        },
        created(){
            this.months = [{
                date: this.year + '' + this.month,
                list: this.getDatesOfMonth(this.year, this.month)
            }]
        },
        methods: {
            formatDate(year, month, day) {
                if (arguments.length != 3) {
                    month = year.month;
                    day = year.day;
                    year = year.year;
                }
                return 'yyyy-mm-dd'.replace(/[ymd]+/gi, function (m) {
                    m = m.toLowerCase();
                    if (m == 'yyyy') {
                        return year;
                    } else if (m == 'mm') {
                        return month < 10 ? '0' + month : month;
                    } else {
                        return day < 10 ? '0' + day : day;
                    }
                });
            },
            getDatesOfMonth(year, month) {
                var dates = [];
                // 初始化为month第一天的日期
                var date = new Date(year, month - 1, 1);
                var dayOfWeek = date.getDay();

                var lastMonthDays = 0;
                date.setDate(0);
                if (dayOfWeek != 0) {
                    // 上月最后一天
                    var prevDate = date.getDate();
                    var lastMonthDays = dayOfWeek - 0;
                    if (lastMonthDays < 0) {
                        lastMonthDays += 7;
                    }
                    // -1是因为i可以等于0
                    for (var i = lastMonthDays - 1; i >= 0; i--) {
                        dates.push({
                            'date': this.formatDate(date.getFullYear(), date.getMonth() + 1, prevDate - i),
                            'day': prevDate - i,
                            'cls': 'prev-month'
                        });
                    }
                }

                for (var i = 1, j = date.getDate(); i <= j; i++) {
                    dates.push({
                        'date': this.formatDate(date.getFullYear(), date.getMonth() + 1, i),
                        'day': i,
                        'cls': 'curr-month'
                    });
                }

                // 上月日期总数+当月日期总数之和不为7的倍数才会显示下月的部分日期
                if (dates.length % 7 > 0) {
                    //   date.setFullYear(defaults.year, defaults.month, 1);
                    for (var i = 1, j = 7 - dates.length % 7; i <= j; i++) {
                        dates.push({
                            'date': this.formatDate(date.getFullYear(), date.getMonth() + 1, i),
                            'day': i,
                            'cls': 'next-month'
                        });
                    }
                }
                return dates

            },
            showPrevMonth(){
                if (this.month == 1) {
                    this.year--
                    this.month = 12
                } else {
                    this.month--
                }

                this.months = [{
                    date: this.year + '' + this.month,
                    list: this.getDatesOfMonth(this.year, this.month)
                }]
            },
            showNextMonth(){
                if (this.month == 12) {
                    this.year++
                    this.month = 1
                } else {
                    this.month++
                }

                this.months = [{
                    date: this.year + '' + this.month,
                    list: this.getDatesOfMonth(this.year, this.month)
                }]
            }

        },
        mounted(){
            console.log(Hammer)
            // get a reference to an element
            var stage = document.getElementById('slider');

// create a manager for that element
            var mc = new Hammer.Manager(stage);

// create a recognizer
            var Swipe = new Hammer.Swipe();

// add the recognizer
            mc.add(Swipe);

// subscribe to events
            var me = this;
            mc.on('swiperight', function (e) {
                me.showPrevMonth()

                me.swipe_direction = 'swipe-right'
                // do something cool
                // var rotation = Math.round(e.rotation);
                //  stage.style.transform = 'rotate('+rotation+'deg)';
            }).on('swipeleft', function (e) {
                me.showNextMonth()
                me.swipe_direction = 'swipe-left'
                // do something cool
                // var rotation = Math.round(e.rotation);
                //  stage.style.transform = 'rotate('+rotation+'deg)';
            }).on('swipeup', function (e) {
               me.view='week'
               // me.showNextMonth()
              //  me.swipe_direction = 'swipe-left'
                // do something cool
                // var rotation = Math.round(e.rotation);
                //  stage.style.transform = 'rotate('+rotation+'deg)';
            }).on('swipedown', function (e) {
                me.view='month'
                // me.showNextMonth()
                //  me.swipe_direction = 'swipe-left'
                // do something cool
                // var rotation = Math.round(e.rotation);
                //  stage.style.transform = 'rotate('+rotation+'deg)';
            });
            /*Swipe(document.getElementById('slider'), {
             callback: function () {
             console.log(arguments)
             }
             });*/
        }
    }
</script>
