/**
 * Created by Administrator on 2015/7/17.
 */
define(["lib/highcharts/highcharts"],function () {

    var statistical=statistical || {}

    /*学习分析*/
    statistical.analysis=function(){
        var exam_analyse_data = {"day":{"categories":[],"series_data":[]},"week":{"categories":["\u6570\u5b66"],"series_data":[{"y":26,"from":"<b>\u6570\u5b66\u8bd5\u9898\u603b\u6570\uff1a26\u9898<\/b><br \/>\u6765\u81ea\u4ee5\u4e0b\u8bd5\u5377\uff1a<br \/>\u5706"}]},"all":{"categories":["\u8bed\u6587","\u6570\u5b66","\u82f1\u8bed","\u7269\u7406","\u5316\u5b66","\u751f\u7269","\u5386\u53f2","\u601d\u60f3\u653f\u6cbb","\u5730\u7406"],"series_data":[{"y":958,"from":"<b>\u8bed\u6587\u8bd5\u9898\u603b\u6570\uff1a958\u9898<\/b><br \/>\u6765\u81ea\u4ee5\u4e0b\u8bd5\u5377\uff1a<br \/>\u4eba\u6559\u7248\u8bed\u6587\u4e5d\u5e74\u7ea7\u4e0a \u7b2c\u4e00\u5355\u5143<br\/>2014\u5e74\u6c38\u5dde\u5e02\u521d\u4e2d\u6bd5\u4e1a\u5b66\u4e1a\u8003\u8bd5\uff08\u8bed\u6587\uff09<br\/>\u6750\u6599\u4f5c\u6587-\u5f3a\u5316\u8bad\u7ec3<br\/>2012\u5e74\u5317\u4eac\u5e02\u4e2d\u8003\u8bd5\u9898<br\/>2011\u5e74\u798f\u5efa\u7701\u798f\u5dde\u5e02\u4e2d\u8003\u8bed\u6587\u8bd5\u9898 \u7b49\u2026\u2026"},{"y":311,"from":"<b>\u6570\u5b66\u8bd5\u9898\u603b\u6570\uff1a311\u9898<\/b><br \/>\u6765\u81ea\u4ee5\u4e0b\u8bd5\u5377\uff1a<br \/>\u5706<br\/>\u57fa\u672c\u4e0d\u7b49\u5f0f\u53ca\u5176\u5e94\u7528-\u5f3a\u5316\u8bad\u7ec3<br\/>\u6307\u6570\u4e0e\u6307\u6570\u51fd\u6570 \u7b49-\u5f3a\u5316\u8bad\u7ec3<br\/>\u4e00\u5143\u4e8c\u6b21\u65b9\u7a0b<br\/>\u5bfc\u6570\u5728\u7814\u7a76\u51fd\u6570\u4e2d\u7684\u5e94\u7528 \u7b49-\u5f3a\u5316\u8bad\u7ec3 \u7b49\u2026\u2026"},{"y":118,"from":"<b>\u82f1\u8bed\u8bd5\u9898\u603b\u6570\uff1a118\u9898<\/b><br \/>\u6765\u81ea\u4ee5\u4e0b\u8bd5\u5377\uff1a<br \/>\u4e8c\u3007\u4e00\u4e00\u5e74\u798f\u5dde\u5e02\u521d\u4e2d\u6bd5\u4e1a\u4f1a\u8003\u3001\u9ad8\u7ea7\u4e2d\u7b49\u5b66\u6821\u62db\u751f\u8003\u8bd5\uff08\u82f1\u8bed\uff09<br\/>\u8fa8\u6790\u4fee\u6539\u75c5\u53e5 \u7b49 \u81ea\u4e3b\u7ec3\u4e60<br\/>2011\u5e74\u666e\u901a\u9ad8\u7b49\u5b66\u6821\u62db\u751f\u5168\u56fd\u7edf\u4e00\u8003\u8bd5(\u82f1\u8bed\u5e7f\u4e1c\u5377)"},{"y":30,"from":"<b>\u7269\u7406\u8bd5\u9898\u603b\u6570\uff1a30\u9898<\/b><br \/>\u6765\u81ea\u4ee5\u4e0b\u8bd5\u5377\uff1a<br \/>2014\u5e74\u666e\u901a\u9ad8\u7b49\u5b66\u6821\u62db\u751f\u5168\u56fd\u7edf\u4e00\u8003\u8bd5\u7406\u79d1\u7efc\u5408\u80fd\u529b\u6d4b\u8bd5(\u7269\u7406\u5c71\u4e1c\u5377)<br\/>\u4eba\u6559\u7248\u516b\u5e74\u7ea7\u4e0b\u518c\u671f\u672b\u6d4b\u8bd5\u5377\uff08\u7269\u7406\uff09"},{"y":65,"from":"<b>\u5316\u5b66\u8bd5\u9898\u603b\u6570\uff1a65\u9898<\/b><br \/>\u6765\u81ea\u4ee5\u4e0b\u8bd5\u5377\uff1a<br \/>2011\u5e74\u6c5f\u82cf\u626c\u5dde\u5e02\u4e2d\u8003\u5316\u5b66\u8bd5\u9898<br\/>\u91d1\u5c5e\u7684\u7535\u5316\u5b66\u8150\u8680 \u7b49 \u81ea\u4e3b\u7ec3\u4e60<br\/>2011\u5e74\u5185\u8499\u53e4\u5305\u5934\u5e02\u4e2d\u8003\u5316\u5b66\u8bd5\u9898<br\/>2010\u5e74\u666e\u901a\u9ad8\u7b49\u5b66\u6821\u62db\u751f\u5168\u56fd\u7edf\u4e00\u8003\u8bd5\u7406\u79d1\u7efc\u5408\u80fd\u529b\u6d4b\u8bd5(\u5316\u5b66\u5e7f\u4e1c\u5377)"},{"y":6,"from":"<b>\u751f\u7269\u8bd5\u9898\u603b\u6570\uff1a6\u9898<\/b><br \/>\u6765\u81ea\u4ee5\u4e0b\u8bd5\u5377\uff1a<br \/>\u6838\u9178\u7684\u5206\u5e03\u3001\u7ed3\u6784\u548c\u529f\u80fd \u7b49 \u81ea\u4e3b\u7ec3\u4e60<br\/>\u6838\u9178\u7684\u5206\u5e03\u3001\u7ed3\u6784\u548c\u529f\u80fd \u7b49 \u81ea\u4e3b\u7ec3\u4e60<br\/>\u6838\u9178\u7684\u5206\u5e03\u3001\u7ed3\u6784\u548c\u529f\u80fd \u7b49 \u81ea\u4e3b\u7ec3\u4e60<br\/>\u6838\u9178\u7684\u5206\u5e03\u3001\u7ed3\u6784\u548c\u529f\u80fd \u7b49 \u81ea\u4e3b\u7ec3\u4e60<br\/>\u6838\u9178\u7684\u5206\u5e03\u3001\u7ed3\u6784\u548c\u529f\u80fd \u7b49 \u81ea\u4e3b\u7ec3\u4e60"},{"y":136,"from":"<b>\u5386\u53f2\u8bd5\u9898\u603b\u6570\uff1a136\u9898<\/b><br \/>\u6765\u81ea\u4ee5\u4e0b\u8bd5\u5377\uff1a<br \/>2010\u5e74\u666e\u901a\u9ad8\u7b49\u5b66\u6821\u62db\u751f\u5168\u56fd\u7edf\u4e00\u8003\u8bd5\u6587\u79d1\u7efc\u5408\u80fd\u529b\u6d4b\u8bd5(\u5386\u53f2\u5e7f\u4e1c\u5377)<br\/>2014\u5e74\u666e\u901a\u9ad8\u7b49\u5b66\u6821\u62db\u751f\u5168\u56fd\u7edf\u4e00\u8003\u8bd5(\u5c71\u4e1c\u5377)\u6587\u79d1\u7efc\u5408\u80fd\u529b\u6d4b\u8bd5(\u5386\u53f2)<br\/>2013\u5e74\u666e\u901a\u9ad8\u7b49\u5b66\u6821\u62db\u751f\u5168\u56fd\u7edf\u4e00\u8003\u8bd5(\u65b0\u8bfe\u6807II\u5377)\u6587\u79d1\u7efc\u5408\u80fd\u529b\u6d4b\u8bd5(\u5386\u53f2)<br\/>2011\u5e74\u666e\u901a\u9ad8\u7b49\u5b66\u6821\u62db\u751f\u5168\u56fd\u7edf\u4e00\u8003\u8bd5\u6587\u79d1\u7efc\u5408\u80fd\u529b\u6d4b\u8bd5(\u5386\u53f2\u5168\u56fd\u8bfe\u6807\u5377)<br\/>2013\u5e74\u666e\u901a\u9ad8\u7b49\u5b66\u6821\u62db\u751f\u5168\u56fd\u7edf\u4e00\u8003\u8bd5(\u6d59\u6c5f\u5377)\u6587\u79d1\u7efc\u5408\u80fd\u529b\u6d4b\u8bd5(\u5386\u53f2) \u7b49\u2026\u2026"},{"y":125,"from":"<b>\u601d\u60f3\u653f\u6cbb\u8bd5\u9898\u603b\u6570\uff1a125\u9898<\/b><br \/>\u6765\u81ea\u4ee5\u4e0b\u8bd5\u5377\uff1a<br \/>2013\u5e74\u666e\u901a\u9ad8\u7b49\u5b66\u6821\u62db\u751f\u5168\u56fd\u7edf\u4e00\u8003\u8bd5(\u5c71\u4e1c\u5377)\u6587\u79d1\u7efc\u5408\u80fd\u529b\u6d4b\u8bd5(\u653f\u6cbb)<br\/>2011\u5e74\u666e\u901a\u9ad8\u7b49\u5b66\u6821\u62db\u751f\u5168\u56fd\u7edf\u4e00\u8003\u8bd5(\u798f\u5efa\u5377)\u6587\u79d1\u7efc\u5408\u80fd\u529b\u6d4b\u8bd5(\u653f\u6cbb)<br\/>2014\u5e74\u666e\u901a\u9ad8\u7b49\u5b66\u6821\u62db\u751f\u5168\u56fd\u7edf\u4e00\u8003\u8bd5(\u5317\u4eac\u5377)\u6587\u79d1\u7efc\u5408\u80fd\u529b\u6d4b\u8bd5(\u653f\u6cbb)<br\/>2010\u5e74\u666e\u901a\u9ad8\u7b49\u5b66\u6821\u62db\u751f\u5168\u56fd\u7edf\u4e00\u8003\u8bd5(\u5317\u4eac\u5377)\u6587\u79d1\u7efc\u5408\u80fd\u529b\u6d4b\u8bd5(\u653f\u6cbb)<br\/>2011\u5e74\u666e\u901a\u9ad8\u7b49\u5b66\u6821\u62db\u751f\u5168\u56fd\u7edf\u4e00\u8003\u8bd5(\u8bfe\u6807\u5168\u56fd\u5377)\u6587\u79d1\u7efc\u5408\u80fd\u529b\u6d4b\u8bd5(\u653f\u6cbb) \u7b49\u2026\u2026"},{"y":19,"from":"<b>\u5730\u7406\u8bd5\u9898\u603b\u6570\uff1a19\u9898<\/b><br \/>\u6765\u81ea\u4ee5\u4e0b\u8bd5\u5377\uff1a<br \/>2013\u5e74\u666e\u901a\u9ad8\u7b49\u5b66\u6821\u62db\u751f\u5168\u56fd\u7edf\u4e00\u8003\u8bd5(\u6d59\u6c5f\u5377)\u6587\u79d1\u7efc\u5408\u80fd\u529b\u6d4b\u8bd5(\u5730\u7406)<br\/>2014\u5e74\u666e\u901a\u9ad8\u7b49\u5b66\u6821\u62db\u751f\u5168\u56fd\u7edf\u4e00\u8003\u8bd5(\u5317\u4eac\u5377)\u6587\u79d1\u7efc\u5408\u80fd\u529b\u6d4b\u8bd5(\u5386\u53f2)"}]}};//诊断测试分析数据
        var exam_right_analyse_data = {"2":{"name":"\u6570\u5b66","data":[{"y":0,"from":"<b>\u661f\u671f\u516d\u7684\u5ba2\u89c2\u9898\u51c6\u786e\u7387\u662f0<\/b>"},{"y":0,"from":"<b>\u661f\u671f\u65e5\u7684\u5ba2\u89c2\u9898\u51c6\u786e\u7387\u662f0<\/b>"},{"y":0,"from":"<b>\u661f\u671f\u4e00\u7684\u5ba2\u89c2\u9898\u51c6\u786e\u7387\u662f0<\/b>"},{"y":10,"from":"<b>\u661f\u671f\u4e8c\u7684\u5ba2\u89c2\u9898\u51c6\u786e\u7387\u662f10<\/b>"},{"y":0,"from":"<b>\u661f\u671f\u4e09\u7684\u5ba2\u89c2\u9898\u51c6\u786e\u7387\u662f0<\/b>"},{"y":0,"from":"<b>\u661f\u671f\u56db\u7684\u5ba2\u89c2\u9898\u51c6\u786e\u7387\u662f0<\/b>"},{"y":0,"from":"<b>\u4eca\u5929\u7684\u5ba2\u89c2\u9898\u51c6\u786e\u7387\u662f0<\/b>"}]}};//诊断测试正确率分析数据


        //功能：诊断测试分析各个时间段切换显示
        //参数：type day一天，week一个星期，all全部
        function exam_analyse(type) {
            $('#container').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: ''
                },
                xAxis: {
                    categories: exam_analyse_data[type]['categories']
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: '题目数量'
                    }
                },
                tooltip: {
                    formatter: function () {
                        //return '<b>' + this.x + '</b><br/>题目数量: '+ this.y + ' <br/>' + this.point.from;
                        return this.point.from;
                    }
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                credits: {
                    enabled: false
                },
                series: [
                    {
                        name: '诊断测试学科',
                        data: exam_analyse_data[type]['series_data']
                    }
                ]
            });
        }


        $('#container-line').highcharts({
            chart: {
                type: 'line'
            },
            title: {
                text: '',
                x: -20 //center
            },
            xAxis: {
                categories: ["\u661f\u671f\u4e94","\u661f\u671f\u516d","\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db"]
            },
            yAxis: {
                title: {
                    text: '正确率（%）'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }],
                min: 0
            },
            tooltip: {
                formatter: function() {
                    //return '<b>' + this.x + '</b><br/>正确率: '+ this.y + ' <br/>' + this.point.from;
                    return this.point.from;
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            credits: {
                enabled: false
            },
            series: [{
                name: exam_right_analyse_data[2]['name'],
                data: exam_right_analyse_data[2]['data']
            }]
        });

        $("[data-chart]").on("click",function(){
            var n=$(this).attr("data-chart");
            switch(n)
            {
                case "1":
                    exam_analyse("day")
                    $(".quiz-analysis-ft").find(".cp-button").addClass("default-button").eq(0).removeClass("default-button")
                    break;
                case "7":
                    exam_analyse("week")
                    $(".quiz-analysis-ft").find(".cp-button").addClass("default-button").eq(1).removeClass("default-button")
                    break;
                case "0":
                    exam_analyse("all")
                    $(".quiz-analysis-ft").find(".cp-button").addClass("default-button").eq(2).removeClass("default-button")
                    break;
                default:
                    console.log("没有设置属性");
            }

        })

            exam_analyse("week")
    }

    /*测试报告*/
    statistical.report=function(){
        var date=[];
        var p=$(".date-box").find("p")
        var em=$(".date-box").find("em")
        em.each(function(i){
            date.push([(p.eq(i).text()).toString(),parseInt(em.eq(i).text())])
        })

        // Build the chart
        $('#container').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: ''
            },

            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        color:'#fff',
                        enabled: true,
                        formatter:function(){
                            return '<b>'+this.point.name+'</b>:'+this.point.percentage.toFixed(2)+"%";
                        },
                        connectorWidth:0,
                        connectorPadding:0,
                        distance:-80
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: '比率',
                data: date
            }]
        });
        $("text[text-anchor='end']:contains('Highcharts.com')").hide()
    }

    return statistical;
});