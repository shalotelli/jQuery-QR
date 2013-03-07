/**
 * Copyright(C) 2013 ResponsiveShops, LLC. All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 *    1. Redistributions of source code must retain the above copyright notice,
 *       this list of conditions and the following disclaimer.
 * 
 *    2. Redistributions in binary form must reproduce the above copyright notice,
 *       this list of conditions and the following disclaimer in the documentation
 *       and/or other materials provided with the distribution.
 * 
 * THIS SOFTWARE IS PROVIDED BY RESPONSIVESHOPS LLC "AS IS" AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
 * EVENT SHALL  RESPONSIVESHOPS LLC OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 * OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 * The views and conclusions contained in the software and documentation are those
 * of the authors and should not be interpreted as representing official policies,
 * either expressed or implied, of RESPONSIVESHOPS, LLC
 * 
 * 
 * -------------------------------------------------------------------------------
 *                                   USAGE
 * -------------------------------------------------------------------------------
 * <script type="text/javascript">
 * 		$(function() {
 * 			$(".qr-link").qr();
 * 		});
 * 	</script>
 * 
 * 	<a href="http://www.responsiveshops.com/" class="qr-link">ResponsiveShops</a>
 * -------------------------------------------------------------------------------
 * 
 * -------------------------------------------------------------------------------
 *                                   OPTIONS
 * -------------------------------------------------------------------------------
 * text: Text to convert. If none set, content of the relative element is used.
 * 
 * size: Size of code in pixels
 * showLabel: Flag to show or hide text label or element content
 * correction: Error Correction Level. Here are the supported values:
 * 		1. L - [Default] Allows recovery of up to 7% data loss
 * 		2. M - Allows recovery of up to 15% data loss
 * 		3. Q - Allows recovery of up to 25% data loss
 * 		4. H - Allows recovery of up to 30% data loss
 * margin: Amount of white space around the code
 * -------------------------------------------------------------------------------
**/
(function($) {
	$.fn.qr = function(text, options) {
		var settings = $.extend({
			size: 200,
			showLabel: false,
			correction: 'L',
			margin: 4
		}, options);
		
		var el = this;
		var url = '';
		var data = '';
		
		var buf = el.text();

		if(settings.correction!='L'||settings.correction!='M'||settings.correction!='Q'||settings.correction!='H') {
			settings.correction = 'L';
		}
		
		if(typeof el.attr('href')==='undefined') {
			if(typeof text==='undefined' || text=='') {
				data = buf;
			} else {
				data = text;
			}
		} else {
			data = el.attr('href');
		}
		
		url = 'https://chart.googleapis.com/chart?cht=qr&chs='+settings.size+'x'+settings.size+'&chld='+settings.correction+'|'+settings.margin+'&chl='+escape(data);
		
		el.html('<img src="'+url+'" border="0" />');
		
		if(settings.showLabel) {
			var label = '';
			if(typeof text==='undefined' || text=='') {
				label = buf;
			} else {
				label = text;
			}
			
			el.append('<br /><div>'+label+'</div>');
		}
	};
})(jQuery);