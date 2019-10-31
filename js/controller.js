dive( '#master' ).divMaster({
	content: [
		{ id: 'head',   type: 'header',  class: 'd-col-12', load: 'pages/masterContent/header.html'},
		//{ id: 'nav',    type: 'nav',     class: 'd-col-12' },
		{ id: 'cuerpo', type: 'div',     class: 'd-col-12 d-sn-left d-sn-right', content: [ 
			{ id: 'slide_1'        , type: 'slide',   class: 'd-col-2 d-sn-right'},
			{ id: 'section_cuerpo' , type: 'section', class: 'd-col-10 d-sn-right', load: 'pages/masterContent/home.html'}
		] },
		{ id: 'footer', type: 'footer',  class: 'd-col-12 d-sn-left d-sn-right d-fixed-footer' , load: 'pages/masterContent/footer.html'}
	]
});
function createMenu(){
	dive('#slide_1').divMenu({
		data: [ 
			{ text: 'Home', 	    href: 'pages/masterContent/home.html' },
			{ text: 'AutoComplete', href: 'pages/autocomplete/'           },
			{ text: 'Accordion',    href: 'pages/accordion/'              },
			{ text: 'Ajax', 	    href: 'pages/ajax/'                   },
			{ text: 'Button',       href: 'pages/button/'                 },
			{ text: 'ComboBox',     href: 'pages/comboBox/'               },
			{ text: 'CheckBox',     href: 'pages/checkBox/'               },
			{ text: 'Menu',         href: 'pages/menu/'                   },
			{ text: 'RadioButton',  href: 'pages/radioButton/'            },
			{ text: 'TabsTrip',  	href: 'pages/tabStrip/'            }
			//{ text: 'Trabajo',      href: 'pages/llamada/'                }
		],
		openTo: "#section_cuerpo",
		vertical: true
	});
}

createMenu();