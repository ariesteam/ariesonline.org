            YAHOO.util.Event.onDOMReady(function () {

                var aItemData = [
                    { 
                        text: "home", 
                        submenu: {  
                            id: "home_menu", 
                            itemdata: [
                                { text: "news"},
                                { text: "people & partners"},
                                { text: "project status"},
                                { text: "terms of use"},
                            ] 
                        }
                    },

                    { 
                        text: "modules", 
                        submenu: {  
                            id: "mod_menu", 
                            itemdata: [
                                { text: "greenhouse gas mitigation"},
                                { text: "water provision and purification"},
                                { text: "flood mitigation"},
                                { text: "sediment retention and buildup"},
                                { text: "aesthetic and cultural", url: "service.html"},
                                { text: "pollution control"},
                                { text: "economic valuation"},
                                { text: "biodiversity"},
                            ] 
                        }
                    },

                    { 
                        text: "research", 
                        submenu: {  
                            id: "res_menu", 
                            itemdata: [
                                { text: "overall approach"},
                                { text: "benefit models"},
                                { text: "beneficiary models"},
                                { text: "sink models"},
                                { text: "flow models"},
                                { text: "scenario analysis"},
                                { text: "sinks"},
                            ] 
                        }
                    },

                    { 
                        text: "applications", 
                        submenu: {  
                            id: "app_menu", 
                            itemdata: [
                                { text: "conservation"},
                                { text: "agriculture"},
                                { text: "extractive industry"},
                                { text: "landscape planning"},
                            ] 
                        }
                    },

                    { 
                        text: "case studies", 
                        submenu: {  
                            id: "cs_menu", 
                            itemdata: [
                                { text: "conservation"},
                                { text: "agriculture"},
                                { text: "extractive industry"},
                                { text: "landscape planning"},
                            ] 
                        }
                    },


                    { 
                        text: "contact us" 
                    },

                ];


                /*
					Instantiate a Menu:  The first argument passed to the constructor
					is the id for the Menu element to be created, the second is an 
					object literal of configuration properties.
                */

                var oMenuBar = new YAHOO.widget.MenuBar("mymenubar", { 
                                                            lazyload: true, 
                                                            itemdata: aItemData 
                                                            });

                /*
                     Since this MenuBar instance is built completely from 
                     script, call the "render" method passing in a node 
                     reference for the DOM element that its should be 
                     appended to.
                */

                oMenuBar.render(document.getElementById("menubar"));


                // Add a "show" event listener for each submenu.
                
                function onSubmenuShow() {

					var oIFrame,
						oElement,
                        nOffsetWidth;

					// Keep the left-most submenu against the left edge of the browser viewport
					if (this.id == "yahoo") {
					
						YAHOO.util.Dom.setX(this.element, 0);
						oIFrame = this.iframe; 
						if (oIFrame) {
							YAHOO.util.Dom.setX(oIFrame, 0);
						}
						this.cfg.setProperty("x", 0, true);
					}


					/*
						Need to set the width for submenus of submenus in IE to prevent the mouseout 
						event from firing prematurely when the user mouses off of a MenuItem's 
						text node.

                    if ((this.id == "filemenu" || this.id == "editmenu") && YAHOO.env.ua.ie) {

                        oElement = this.element;
                        nOffsetWidth = oElement.offsetWidth;
                
                        /*
                            Measuring the difference of the offsetWidth before and after
                            setting the "width" style attribute allows us to compute the 
                            about of padding and borders applied to the element, which in 
                            turn allows us to set the "width" property correctly.
                        * /
                        
                        oElement.style.width = nOffsetWidth + "px";
                        oElement.style.width = (nOffsetWidth - (oElement.offsetWidth - nOffsetWidth)) + "px";
                    
                    }
					*/

                }
                

                // Subscribe to the "show" event for each submenu
                
                oMenuBar.subscribe("show", onSubmenuShow);


                var oPanel = new YAHOO.widget.Panel("exampleinfo", { constraintoviewport: true, fixedcenter: false, width: "100%", zIndex: 1});
                oPanel.render("menubar");
            
            });

