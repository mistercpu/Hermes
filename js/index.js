// JavaScript Document


$(function(){ 

	$('.nav li').hover(function(){ 
		$(this).find('span').stop(true).animate({'top':0},200);
		if(!$(this).hasClass('navThis')){
			$(this).addClass('navThisJs');
		};
	},function(){ 
		$(this).find('span').animate({'top':80},200).parents('li').removeClass('navThisJs');
	});
	
	$('.sp_pop').hover(function(){ 
		$(this).addClass('top_h').removeClass('top');
	},function(){ 
		$(this).removeClass('top_h').addClass('top');
	});
	
	$('.weixin').hover(function(){ 
		$(this).find('span').show();
	},function(){ 
		$(this).find('span').hide();
	});
	
	$('.tuijian li,.xl-list-img').hover(function(){ 
		$(this).css({'opacity':0.8});
	},function(){ 
		$(this).css({'opacity':1});
	});

	
	(function($){
		var slide = {
			init:function(settings){
				this.index = 0;	
				this.bindEvent(settings);	
				this.zidong(settings);
			},
			bindEvent:function(settings){
				var that = this;
				$(".jdt-list").find("span").mouseover(function(){
					that.index = $(this).index();
					that.eff(settings);
				});
				
				$(".jdt-r").click(function(){
					that.index +=1;
					if(that.index == 3){
						that.index = 0;
					}
					that.eff(settings);
				});
				$(".jdt-l").click(function(){
					that.index -=1;
					if(that.index < 0){
						that.index = 2;
					}
					that.eff(settings);
				});
			},
			
			steInfo:function(){
				$('.jdt-text li').eq(this.index).show().siblings().hide();
				$(".jdt-list").find("span").eq(this.index).addClass("jdtThis").siblings().removeClass("jdtThis");
			},
			
			eff:function(settings){
				this.steInfo();
				$('.jdt-img li').eq(this.index).fadeIn(500,function(){$(this).css({'z-index':2});}).siblings().fadeOut(500,function(){$(this).css({'z-index':1});});
			},
			
			zidong:function(settings){
				var timed = setInterval(function(){
					$(".jdt-r").click();
				},4000);
				$(".jdt-list-box,.jdt-l,.jdt-r").hover(function(){
					clearInterval(timed);	
				},function(){
					timed = setInterval(function(){
						$(".jdt-r").click();
					},4000);
				})
			}
		}
		
		$.fn.slide = function(optian){
			var settings = {};
			$.extend(true, settings, optian || {});
			slide.init(settings);
		}
    }(jQuery));
	
	$("document").slide();

	
/*图片滚动*/
	
	$(function(){ 
		//var runW   = 0 ;
		var $ulBox = $('.huiyuan-list');
		var btnL   = $('.huiyuan-l');
		var btnR   = $('.huiyuan-r');
		var liW    = $ulBox.find('li:first').width();
		$ulBox.css('width',$ulBox.find('li').length*liW);
		if($ulBox.find('li').length>3){
			$('.huiyuan-r').addClass('huiyuan-r2');
		}
		btnL.click(function(){ 
			var ulL = $ulBox.position().left;
			if(ulL<0){
				var runW   = liW ;
				runNow(runW,ulL);
			}
		});
		btnR.click(function(){ 
			var ulL = $ulBox.position().left;
			if(ulL>-$ulBox.width()+liW*3){
				var runW   = -liW ;
				runNow(runW,ulL);
			};
		});
		function runNow(runW,ulL){
			if(ulL%liW==0){
				$ulBox.animate({'left':ulL+runW},500,function(){
					if($ulBox.position().left==0){
						btnL.removeClass('huiyuan-l2');
					}else{btnL.addClass('huiyuan-l2');};
					if($ulBox.position().left==-$ulBox.width()+liW*3){
						btnR.removeClass('huiyuan-r2');
					}else{btnR.addClass('huiyuan-r2');};
				});
			}
		};
	
	});










});




