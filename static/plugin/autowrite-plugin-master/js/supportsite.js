
KISSY.add("asosFunction", 
function(a) {
    function b() {}
    function c() {
        var a = KISSY.one(".product_price .product_price_details");
        if (a && jm_tools.isVisible(a) && -1 != a.text().indexOf("$")) {
            var b = jm_tools.getAbsolutePos(a, 5, -8),
            c = {
                triangle: "left",
                posLeft: b.right,
                posTop: b.top,
                aftertext: "（全球免邮）"
            };
            
        }
    }
    function d() {
        return {
            orderButton: "#divsubmit input",
            priceQuery: "#_ctl0_ContentBody_ctlReceiptSummary_rptReceiptItems__ctl1_lblGrandTotal"
        }
    }
    return a.augment(b, {
        init: function() {
            this.reposTips(),
            jm_tools.placeOrder(d())
        },
        reposTips: function() {
            c(),
            "/" == window.location.pathname && jm_tools.showAddrNotify()
        },
        getShipAddressCallback: function() {}
    }),
    b
}),
// KISSY.add("nordstromFunction", 
// function(a) {
//     function b() {}
//     function c() {
//         var a = KISSY.one("#itemNumberPrice .itemNumberPriceRow span.price.sale");
//         if (a || (a = KISSY.one("#itemNumberPrice .itemNumberPriceRow span.price.regular")), a && jm_tools.isVisible(a)) {
//             var b = jm_tools.getAbsolutePos(a, 2, -6),
//             c = {
//                 triangle: "left",
//                 posLeft: b.right,
//                 posTop: b.top
//             };
//             
//         }
//     }
//     function d() {
//         var a = {
//             query: ".yaApnAddAddressModalHeader",
//             triangle: "top",
//             x: 0,
//             y: 25,
//             style: "z-index:10010",
//             addressMap: {
//                 fullName: "",
//                 fullAddress: "",
//                 fullZipCode: "#ctl00_EndOfDomContent_addressDisplayPanel_addEditAddressForm_zipCode",
//                 firstName: "#ctl00_EndOfDomContent_addressDisplayPanel_addEditAddressForm_firstName",
//                 lastName: "#ctl00_EndOfDomContent_addressDisplayPanel_addEditAddressForm_lastName",
//                 address1: "#ctl00_EndOfDomContent_addressDisplayPanel_addEditAddressForm_address1",
//                 address2: "#ctl00_EndOfDomContent_addressDisplayPanel_addEditAddressForm_address2",
//                 zipCode: "",
//                 zipCodeLast: "",
//                 telephone: "#ctl00_EndOfDomContent_addressDisplayPanel_addEditAddressForm_phoneNumber",
//                 province: "#ctl00_EndOfDomContent_addressDisplayPanel_addEditAddressForm_stateProvince",
//                 city: "#ctl00_EndOfDomContent_addressDisplayPanel_addEditAddressForm_city"
//             }
//         };
//         return a
//     }
//     function e() {
//         return {
//             orderButton: "#ctl00_mainContentPlaceHolder_orderSubmitPanel_submitOrderButton",
//             priceQuery: "#ctl00_mainContentPlaceHolder_checkoutOrderTotals_orderTotalLabel"
//         }
//     }
//     return a.augment(b, {
//         init: function() {
//             this.reposTips(),
//             jm_tools.placeOrder(e()),
//             jm_tools.listenCssChange("#ctl00_EndOfDomContent_addressDisplayPanel_Modal")
//         },
//         reposTips: function() {
//             c(),
//             "/" == window.location.pathname && jm_tools.showAddrNotify(),
//             jm_tools.shipAddressTips(d())
//         },
//         getShipAddressCallback: function(a) {
//             var b = {
//                 AL: "73|0",
//                 AK: "16|1",
//                 AS: "74|4",
//                 AZ: "70|0",
//                 AR: "75|0",
//                 CA: "71|0",
//                 CO: "72|0",
//                 CT: "67|0",
//                 DE: "69|0",
//                 DC: "68|0",
//                 FL: "65|0",
//                 GA: "66|0",
//                 GU: "61|4",
//                 HI: "62|1",
//                 ID: "63|0",
//                 IL: "58|0",
//                 IN: "59|0",
//                 IA: "60|0",
//                 KS: "55|0",
//                 KY: "56|0",
//                 LA: "57|0",
//                 ME: "52|0",
//                 MD: "50|0",
//                 MA: "51|0",
//                 MI: "47|0",
//                 MN: "48|0",
//                 MS: "49|0",
//                 MO: "44|0",
//                 MT: "45|0",
//                 NE: "46|0",
//                 MP: "53|4",
//                 NV: "41|0",
//                 NH: "42|0",
//                 NJ: "43|0",
//                 NM: "38|0",
//                 NY: "39|0",
//                 NC: "40|0",
//                 ND: "35|0",
//                 OH: "36|0",
//                 OK: "37|0",
//                 OR: "32|0",
//                 PA: "34|0",
//                 PR: "29|4",
//                 RI: "30|0",
//                 SC: "31|0",
//                 SD: "26|0",
//                 TN: "27|0",
//                 TX: "28|0",
//                 UT: "23|0",
//                 VT: "24|0",
//                 VA: "25|0",
//                 VI: "20|4",
//                 WA: "21|0",
//                 WV: "22|0",
//                 WI: "17|0",
//                 WY: "18|0"
//             };
//             jm_tools.generateAutoAddrList(a, d(), b)
//         }
//     }),
//     b
// }),
KISSY.add("walgreensFunction", 
function(a) {
    function b() {}
    function c() {
        var a = KISSY.one("#price_amount #vpdSinglePrice");
        if (a && jm_tools.isVisible(a)) {
            var b = jm_tools.getAbsolutePos(a, 10, 0),
            c = {
                triangle: "left",
                posLeft: b.right,
                posTop: b.top
            };
            
        }
    }
    function d() {
        var a = {
            query: "#refreshShippingInfo #leftNavShippingInfo h3",
            triangle: "left",
            x: 382,
            y: 57,
            addressMap: {
                fullName: "",
                fullAddress: "#shipAddress",
                fullZipCode: "",
                firstName: "#firstName",
                lastName: "#lastName",
                address1: "",
                address2: "",
                zipCode: "#editZipCode",
                zipCodeLast: "#editZipCodeLast",
                telephone: "#newShippingPhoneNumber",
                province: "#editShipState",
                city: "#editShipCity"
            }
        },
        b = {
            query: "#guest_shipping_info #leftNavShippingInfo h3",
            triangle: "left",
            x: 382,
            y: 57,
            addressMap: {
                fullName: "",
                fullAddress: "#streetAddress",
                fullZipCode: "",
                firstName: "#firstName",
                lastName: "#lastName",
                address1: "",
                address2: "",
                zipCode: "#newShippingPostalCode",
                zipCodeLast: "input[name='newShippingAddOnPostalCode']",
                telephone: "#phoneNumber",
                province: "#newShippingState",
                city: "#city"
            }
        };
        return [a, b]
    }
    function e() {
        return {
            orderButton: "#submitTop",
            priceQuery: "#refreshPmtDtlsByAjaxCall .totalPrc"
        }
    }
    return a.augment(b, {
        init: function() {
            this.reposTips(),
            jm_tools.placeOrder(e())
        },
        reposTips: function() {
            c(),
            "/" == window.location.pathname && jm_tools.showAddrNotify(),
            jm_tools.shipAddressTips(d())
        },
        getShipAddressCallback: function(a) {
            KISSY.each(a, 
            function(a) {
                KISSY.each(a.list, 
                function(a) {
                    a.telephone && (a.telephone = a.telephone.replace(/(\s|-)/g, ""))
                })
            }),
            jm_tools.generateAutoAddrList(a, d())
        }
    }),
    b
}),
KISSY.add("bhphotovideoFunction", 
function(a) {
    function b() {}
    function c() {
        var a = KISSY.one("#priceZone .youPay span[itemprop='price']");
        if (a && jm_tools.isVisible(a)) {
            var b = jm_tools.getAbsolutePos(a, -25, -45),
            c = {
                triangle: "bottom",
                posLeft: b.left,
                posTop: b.top
            };
            
        }
    }
    function d() {
        var a = {
            query: ".billShipSection .billShippAdd .chkotH2",
            triangle: "left",
            x: 130,
            y: -2,
            addressMap: {
                fullName: "",
                fullAddress: "",
                fullZipCode: "",
                firstName: "#billingfirstName",
                lastName: "#billinglastName",
                address1: "#billingstreetLine1",
                address2: "#billingstreetLine2",
                zipCode: "#billingZip",
                zipCodeLast: "",
                telephone: "#billingphone",
                province: "",
                city: ""
            }
        };
        return a
    }
    function e() {
        return {
            orderButton: "#placeOrderButton #PreAuth",
            priceQuery: "#finalReview #total"
        }
    }
    return a.augment(b, {
        init: function() {
            this.reposTips(),
            jm_tools.placeOrder(e())
        },
        reposTips: function() {
            c(),
            "/" == window.location.pathname && jm_tools.showAddrNotify(),
            jm_tools.shipAddressTips(d())
        },
        getShipAddressCallback: function(a) {
            jm_tools.generateAutoAddrList(a, d())
        }
    }),
    b
}),
KISSY.add("reiFunction", 
function(a) {
    function b() {}
    function c() {
        var a = KISSY.one(".priceDescription .productState .price");
        if (a && jm_tools.isVisible(a)) {
            var b = jm_tools.getAbsolutePos(a, 5, 2),
            c = {
                triangle: "left",
                posLeft: b.right,
                posTop: b.top
            };
            
        }
    }
    function d() {
        var a = {
            query: "input[name='bill_safname']",
            triangle: "bottom",
            x: 30,
            y: -50,
            addressMap: {
                fullName: "",
                fullAddress: "",
                fullZipCode: "input[name='bill_sazipc']",
                firstName: "input[name='bill_safname']",
                lastName: "input[name='bill_salname']",
                address1: "input[name='bill_saaddr1']",
                address2: "input[name='bill_saaddr2']",
                zipCode: "",
                zipCodeLast: "",
                telephone: "input[name='bill_saphone1']",
                province: "select[name='bill_sastate']",
                city: "input[name='bill_sacity']"
            }
        },
        b = {
            query: "input[name='ship_safname']",
            triangle: "bottom",
            x: 30,
            y: -50,
            addressMap: {
                fullName: "",
                fullAddress: "",
                fullZipCode: "input[name='ship_sazipc']",
                firstName: "input[name='ship_safname']",
                lastName: "input[name='ship_salname']",
                address1: "input[name='ship_saaddr1']",
                address2: "input[name='ship_saaddr2']",
                zipCode: "",
                zipCodeLast: "",
                telephone: "input[name='ship_saphone1']",
                province: "select[name='ship_sastate']",
                city: "input[name='ship_sacity']"
            }
        };
        return [b, a]
    }
    function e() {
        return {
            orderButton: "#payment #submitOrderButton",
            priceQuery: ".shoppingCart .subtotals:last td:last"
        }
    }
    function f() {
        var a = d(),
        b = null;
        KISSY.one(a[0].query) ? b = a[0].addressMap: KISSY.one(a[1].query) && (b = a[1].addressMap),
        KISSY.one("body").on("jm_auto_address", 
        function() {
            if (b) {
                var a = "";
                for (var c in b) {
                    var d = KISSY.one(b[c]);
                    d && (a += 'jQuery("' + b[c] + '").trigger("keydown");')
                }
                console.log("scriptStr-----", a);
                var e = document.createElement("script");
                e.text = a,
                document.getElementsByTagName("head")[0].appendChild(e)
            }
        })
    }
    return a.augment(b, {
        init: function() {
            this.reposTips(),
            jm_tools.placeOrder(e()),
            f()
        },
        reposTips: function() {
            c(),
            "/" == window.location.pathname && jm_tools.showAddrNotify(),
            jm_tools.shipAddressTips(d())
        },
        getShipAddressCallback: function(a) {
            jm_tools.generateAutoAddrList(a, d())
        }
    }),
    b
}),
// KISSY.add("iherbFunction", 
// function(a) {
//     function b() {}
//     function c() {}
//     function d() {
//         var a = {
//             query: "#FirstName",
//             triangle: "bottom",
//             x: 0,
//             y: -170,
//             addressMap: {
//                 fullName: "",
//                 fullAddress: "",
//                 fullZipCode: "#PostalCode",
//                 firstName: "#FirstName",
//                 lastName: "#LastName",
//                 address1: "#AddressLine1",
//                 address2: "#AddressLine2",
//                 zipCode: "",
//                 zipCodeLast: "",
//                 telephone: "#TelNumber",
//                 province: "#RegionName",
//                 city: "#City"
//             }
//         };
//         return a
//     }
//     function e() {
//         return {
//             orderButton: "#btnPlaceOrder",
//             priceQuery: ".right .black14b"
//         }
//     }
//     return a.augment(b, {
//         init: function() {
//             this.reposTips(),
//             jm_tools.placeOrder(e())
//         },
//         reposTips: function() {
//             c(),
//             jm_tools.shipAddressTips(d())
//         },
//         getShipAddressCallback: function(a) {
//             jm_tools.generateAutoAddrList(a, d())
//         }
//     }),
//     b
// }),
KISSY.add("saksfifthavenueFunction", 
function(a) {
    function b() {}
    function c() {
        var a = KISSY.one("form .product-price");
        if (a && jm_tools.isVisible(a)) {
            var b = jm_tools.getAbsolutePos(a, -5, -8),
            c = {
                triangle: "left",
                posLeft: b.right,
                posTop: b.top
            };
            
        }
    }
    function d() {
        var a = {
            query: "select[name='SHIP_TO_ADDRESS<>indGift']",
            triangle: "bottom",
            x: 159,
            y: -65,
            addressMap: {
                fullName: "",
                fullAddress: "",
                fullZipCode: "#shipZip",
                firstName: "#shipFirst",
                lastName: "#shipLast",
                address1: "#shipAddress1",
                address2: "#shipAddress2",
                zipCode: "",
                zipCodeLast: "",
                telephone: "#shipPhone",
                province: "#shipState",
                city: "#shipCity"
            }
        };
        return a
    }
    function e() {
        return {
            orderButton: "#jsReviewSubmit",
            priceQuery: "#jsVal-grandTotal"
        }
    }
    return a.augment(b, {
        init: function() {
            this.reposTips(),
            jm_tools.placeOrder(e())
        },
        reposTips: function() {
            c(),
            "/" == window.location.pathname && jm_tools.showAddrNotify(),
            jm_tools.shipAddressTips(d())
        },
        getShipAddressCallback: function(a) {
            jm_tools.generateAutoAddrList(a, d())
        }
    }),
    b
}),
KISSY.add("net-a-porterFunction", 
function(a) {
    function b() {}
    function c() {
        var a = KISSY.one("#product-info #price");
        if (a && jm_tools.isVisible(a)) {
            var b = jm_tools.getAbsolutePos(a, 75, -10),
            c = {
                triangle: "left",
                posLeft: b.left,
                posTop: b.top
            };
            
        }
    }
    function d() {
        return {
            orderButton: "#processPayment",
            priceQuery: "#payment_page_bottom .total-amount"
        }
    }
    return a.augment(b, {
        init: function() {
            this.reposTips(),
            jm_tools.placeOrder(d())
        },
        reposTips: function() {
            c(),
            "/" == window.location.pathname && jm_tools.showAddrNotify()
        },
        getShipAddressCallback: function() {}
    }),
    b
}),
KISSY.add("gymboreeFunction", 
function(a) {
    function b() {}
    function c() {
        var a = null;
        if (KISSY.one(".b-price .reg-price-dollars") ? a = KISSY.one(".b-price .reg-price-dollars") : KISSY.one(".sale-price .reg-price-dollars") ? a = KISSY.one(".sale-price .reg-price-dollars") : KISSY.one(".reg-price .reg-price-dollars") && (a = KISSY.one(".reg-price .reg-price-dollars")), a && jm_tools.isVisible(a)) {
            var b = jm_tools.getAbsolutePos(a, 10, -10),
            c = {
                triangle: "left",
                posLeft: b.right,
                posTop: b.top
            };
            
        }
    }
    function d() {
        var a = {
            query: "input[name='ADDRESS<>firstName']",
            triangle: "left",
            x: 175,
            y: -52,
            addressMap: {
                fullName: "",
                fullAddress: "",
                fullZipCode: "input[name='ADDRESS<>postal']",
                firstName: "input[name='ADDRESS<>firstName']",
                lastName: "input[name='ADDRESS<>lastName']",
                address1: "input[name='ADDRESS<>address1']",
                address2: "input[name='ADDRESS<>address2']",
                zipCode: "",
                zipCodeLast: "",
                telephone: "input[name='ADDRESS<>phone']",
                province: "select[name='ADDRESS<>state_cd']",
                city: "input[name='ADDRESS<>city']"
            }
        };
        return a
    }
    function e() {
        return {
            orderButton: "#placeOrderForm .buttonsPlaceholder .right",
            priceQuery: "#orderTotal"
        }
    }
    return a.augment(b, {
        init: function() {
            this.reposTips(),
            jm_tools.placeOrder(e()),
            jm_tools.listenCssChange("#popupEditShippingAddress", 
            function() {
                KISSY.one("body").fire("jmRepaint")
            })
        },
        reposTips: function() {
            c(),
            "/" == window.location.pathname && jm_tools.showAddrNotify(),
            jm_tools.shipAddressTips(d())
        },
        getShipAddressCallback: function(a) {
            jm_tools.generateAutoAddrList(a, d())
        }
    }),
    b
}),
KISSY.add("diapersFunction", 
function(a) {
    function b() {}
    function c() {
        var a = KISSY.one("#priceDivClass .singlePrice");
        if (a && jm_tools.isVisible(a)) {
            var b = jm_tools.getAbsolutePos(a, 0, 35),
            c = {
                triangle: "top",
                posLeft: b.left,
                posTop: b.top
            };
            
        }
    }
    function d() {
        var a = {
            query: ".enterShippingAddress",
            triangle: "left",
            x: 215,
            y: -35,
            addressMap: {
                fullName: "",
                fullAddress: "",
                fullZipCode: "#txtZip",
                firstName: "#txtFirstName",
                lastName: "#txtLastName",
                address1: "#txtAddress1",
                address2: "#txtAddress2",
                zipCode: "",
                zipCodeLast: "",
                telephone: "#txtPhone",
                province: "#StateDropDown",
                city: "#txtCity"
            }
        };
        return a
    }
    function e() {
        return {
            orderButton: ".placeBtn",
            priceQuery: "#TotalLabelForOrderReview"
        }
    }
    return a.augment(b, {
        init: function() {
            this.reposTips(),
            jm_tools.placeOrder(e())
        },
        reposTips: function() {
            c(),
            "/" == window.location.pathname && jm_tools.showAddrNotify(),
            jm_tools.shipAddressTips(d())
        },
        getShipAddressCallback: function(a) {
            jm_tools.generateAutoAddrList(a, d())
        }
    }),
    b
}),
KISSY.add("puritanFunction", 
function(a) {
    function b() {}
    function c() {}
    function d() {
        var a = {
            query: "#AddressForm input[name='ShipTolname']",
            triangle: "left",
            x: 157,
            y: -47,
            addressMap: {
                fullName: "",
                fullAddress: "",
                fullZipCode: "",
                firstName: "input[name='ShipTolname']",
                lastName: "input[name='ShipTofname']",
                address1: "input[name='ShipToaddress']",
                address2: "input[name='ShipToAptNum']",
                zipCode: "input[name='ShipTozipcode']",
                zipCodeLast: "input[name='ShipTozipcode2']",
                telephoneArea: "input[name='ShipTophone1']",
                telephoneExchange: "input[name='ShipTophone2']",
                telephoneNumber: "input[name='ShipTophone3']",
                province: "select[name='ShipToStateID']",
                city: "input[name='ShipTocity']"
            }
        },
        b = {
            query: "#AddressForm input[name='BillTolname']",
            triangle: "left",
            x: 160,
            y: -40,
            addressMap: {
                fullName: "",
                fullAddress: "",
                fullZipCode: "",
                firstName: "input[name='BillTolname']",
                lastName: "input[name='BillTofname']",
                address1: "input[name='BillToaddress']",
                address2: "input[name='BillToAptNum']",
                zipCode: "input[name='BillTozipcode']",
                zipCodeLast: "input[name='BillTozipcode2']",
                telephoneArea: "input[name='BillTophone1']",
                telephoneExchange: "input[name='BillTophone2']",
                telephoneNumber: "input[name='BillTophone3']",
                province: "select[name='BillToStateID']",
                city: "input[name='BillTocity']"
            }
        };
        return [a, b]
    }
    function e() {
        return {
            orderButton: ".placeBtn",
            priceQuery: "#TotalLabelForOrderReview"
        }
    }
    return a.augment(b, {
        init: function() {
            this.reposTips(),
            jm_tools.placeOrder(e())
        },
        reposTips: function() {
            c(),
            "/" == window.location.pathname && jm_tools.showAddrNotify(),
            jm_tools.shipAddressTips(d())
        },
        getShipAddressCallback: function(a) {
            var b = {
                AL: "AL1",
                AK: "AK1",
                AS: "AS1",
                AZ: "AZ1",
                AR: "AR1",
                CA: "CA1",
                CO: "CO1",
                CT: "CT1",
                DE: "DE1",
                DC: "DC1",
                FL: "FL1",
                GA: "GA1",
                GU: "GU1",
                HI: "HI1",
                ID: "ID1",
                IL: "IL1",
                IN: "IN1",
                IA: "IA1",
                KS: "KS1",
                KY: "KY1",
                LA: "LA1",
                ME: "ME1",
                MD: "MD1",
                MA: "MA1",
                MI: "MI1",
                MN: "MN1",
                MS: "MS1",
                MO: "MO1",
                MT: "MT1",
                NE: "NE1",
                MP: "MP1",
                NV: "NV1",
                NH: "NH1",
                NJ: "NJ1",
                NM: "NM1",
                NY: "NY1",
                NC: "NC1",
                ND: "ND1",
                OH: "OH1",
                OK: "OK1",
                OR: "OR1",
                PA: "PA1",
                PR: "PR1",
                RI: "RI1",
                SC: "SC1",
                SD: "SD1",
                TN: "TN1",
                TX: "TX1",
                UT: "UT1",
                VT: "VT1",
                VA: "VA1",
                VI: "VI1",
                WA: "WA1",
                WV: "WV1",
                WI: "WI1",
                WY: "WY1"
            };
            KISSY.each(a, 
            function(a) {
                KISSY.each(a.list, 
                function(a) {
                    if (a.telephone) {
                        var b = a.telephone.split("-");
                        a.telephoneArea = b[0],
                        a.telephoneExchange = b[1],
                        a.telephoneNumber = b[2]
                    }
                })
            }),
            jm_tools.generateAutoAddrList(a, d(), b)
        }
    }),
    b
}),
KISSY.add("albeebabyFunction", 
function(a) {
    function b() {}
    function c() {
        var a = KISSY.one(".itemOrderSalePrice");
        if (a && jm_tools.isVisible(a)) {
            var b = jm_tools.getAbsolutePos(a, 250, -2),
            c = {
                triangle: "left",
                posLeft: b.left,
                posTop: b.top
            };
            
        }
    }
    function d() {
        var a = {
            query: "#ys_shipBillShippingInfo",
            triangle: "bottom",
            x: 200,
            y: -35,
            addressMap: {
                fullName: "",
                fullAddress: "",
                fullZipCode: "#shipping-zip",
                firstName: "#shipping-first-name",
                lastName: "#shipping-last-name",
                address1: "#shipping-address1",
                address2: "#shipping-address2",
                zipCode: "",
                zipCodeLast: "",
                telephone: "#shipping-phone",
                province: "#shipping-state",
                city: "#shipping-city"
            }
        };
        return a
    }
    function e() {
        return {
            orderButton: ".ys_pageActions input[name='eventName.reviewContinueEvent']",
            priceQuery: "#cart-total-value"
        }
    }
    return a.augment(b, {
        init: function() {
            this.reposTips(),
            jm_tools.placeOrder(e())
        },
        reposTips: function() {
            c(),
            "/" == window.location.pathname && jm_tools.showAddrNotify(),
            jm_tools.shipAddressTips(d())
        },
        getShipAddressCallback: function(a) {
            jm_tools.generateAutoAddrList(a, d())
        }
    }),
    b
});
