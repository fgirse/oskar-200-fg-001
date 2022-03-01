(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 9618:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./AuthorLayout": 4152,
	"./AuthorLayout.js": 4152,
	"./ListLayout": 9795,
	"./ListLayout.js": 9795,
	"./PostLayout": 5105,
	"./PostLayout.js": 5105,
	"./PostSimple": 3259,
	"./PostSimple.js": 3259
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9618;

/***/ }),

/***/ 6009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);


// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ...rest
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);


/***/ }),

/***/ 1891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ MDXLayoutRenderer)
});

// UNUSED EXPORTS: MDXComponents

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "mdx-bundler/client"
const client_namespaceObject = require("mdx-bundler/client");
// EXTERNAL MODULE: ./components/Image.js
var Image = __webpack_require__(6009);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(4373);
;// CONCATENATED MODULE: ./components/TOCInline.js

/**
 * @typedef TocHeading
 * @prop {string} value
 * @prop {number} depth
 * @prop {string} url
 */ /**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {{
 *  toc: TocHeading[],
 *  indentDepth?: number,
 *  fromHeading?: number,
 *  toHeading?: number,
 *  asDisclosure?: boolean,
 *  exclude?: string|string[]
 * }} props
 *
 */ const TOCInline = ({ toc , indentDepth =3 , fromHeading =1 , toHeading =6 , asDisclosure =false , exclude ='' ,  })=>{
    const re = Array.isArray(exclude) ? new RegExp('^(' + exclude.join('|') + ')$', 'i') : new RegExp('^(' + exclude + ')$', 'i');
    const filteredToc = toc.filter((heading)=>heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
    );
    const tocList = /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        children: filteredToc.map((heading)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: `${heading.depth >= indentDepth && 'ml-6'}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: heading.url,
                    children: heading.value
                })
            }, heading.value)
        )
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: asDisclosure ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("details", {
            open: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("summary", {
                    className: "pt-2 pb-2 ml-6 text-xl font-bold",
                    children: "Table of Contents"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "ml-6",
                    children: tocList
                })
            ]
        }) : tocList
    }));
};
/* harmony default export */ const components_TOCInline = (TOCInline);

;// CONCATENATED MODULE: ./components/Pre.js


const Pre = (props)=>{
    const textInput = (0,external_react_.useRef)(null);
    const { 0: hovered , 1: setHovered  } = (0,external_react_.useState)(false);
    const { 0: copied , 1: setCopied  } = (0,external_react_.useState)(false);
    const onEnter = ()=>{
        setHovered(true);
    };
    const onExit = ()=>{
        setHovered(false);
        setCopied(false);
    };
    const onCopy = ()=>{
        setCopied(true);
        navigator.clipboard.writeText(textInput.current.textContent);
        setTimeout(()=>{
            setCopied(false);
        }, 2000);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: textInput,
        onMouseEnter: onEnter,
        onMouseLeave: onExit,
        className: "relative",
        children: [
            hovered && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                "aria-label": "Copy code",
                type: "button",
                className: `absolute right-2 top-2 w-8 h-8 p-1 rounded border-2 bg-gray-700 dark:bg-gray-800 ${copied ? 'focus:outline-none focus:border-green-400 border-green-400' : 'border-gray-300'}`,
                onClick: onCopy,
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    fill: "none",
                    className: copied ? 'text-green-400' : 'text-gray-300',
                    children: copied ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                children: props.children
            })
        ]
    }));
};
/* harmony default export */ const components_Pre = (Pre);

// EXTERNAL MODULE: ./components/NewsletterForm.js
var NewsletterForm = __webpack_require__(8968);
;// CONCATENATED MODULE: ./components/MDXComponents.js

/* eslint-disable react/display-name */ 






const MDXComponents = {
    Image: Image/* default */.Z,
    TOCInline: components_TOCInline,
    a: Link/* default */.Z,
    pre: components_Pre,
    BlogNewsletterForm: NewsletterForm/* BlogNewsletterForm */.w,
    wrapper: ({ components , layout , ...rest })=>{
        const Layout = __webpack_require__(9618)(`./${layout}`).default;
        return(/*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            ...rest
        }));
    }
};
const MDXLayoutRenderer = ({ layout , mdxSource , ...rest })=>{
    const MDXLayout = (0,external_react_.useMemo)(()=>(0,client_namespaceObject.getMDXComponent)(mdxSource)
    , [
        mdxSource
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(MDXLayout, {
        layout: layout,
        components: MDXComponents,
        ...rest
    }));
};


/***/ }),

/***/ 8215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PageTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function PageTitle({ children  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",
        children: children
    }));
};


/***/ }),

/***/ 8498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ScrollTopAndComment)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "smoothscroll-polyfill"
const external_smoothscroll_polyfill_namespaceObject = require("smoothscroll-polyfill");
var external_smoothscroll_polyfill_default = /*#__PURE__*/__webpack_require__.n(external_smoothscroll_polyfill_namespaceObject);
;// CONCATENATED MODULE: ./components/ScrollTopAndComment.js



const ScrollTopAndComment = ()=>{
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        external_smoothscroll_polyfill_default().polyfill();
        const handleWindowScroll = ()=>{
            if (window.scrollY > 50) setShow(true);
            else setShow(false);
        };
        window.addEventListener('scroll', handleWindowScroll);
        return ()=>window.removeEventListener('scroll', handleWindowScroll)
        ;
    }, []);
    const handleScrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const handleScrollToComment = ()=>{
        document.getElementById('comment').scrollIntoView();
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "fixed flex-col hidden gap-3 right-8 bottom-8 md:flex",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                "aria-label": "Scroll To Comment",
                type: "button",
                onClick: handleScrollToComment,
                style: {
                    opacity: show ? 1 : 0
                },
                className: "p-2 text-gray-500 transition-all bg-gray-200 rounded-full dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "w-5 h-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
                        clipRule: "evenodd"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                "aria-label": "Scroll To Top",
                type: "button",
                onClick: handleScrollTop,
                style: {
                    opacity: show ? 1 : 0
                },
                className: "p-2 text-gray-500 transition-all bg-gray-200 rounded-full dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "w-5 h-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",
                        clipRule: "evenodd"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const components_ScrollTopAndComment = (ScrollTopAndComment);


/***/ }),

/***/ 9072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SectionContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* eslint-disable prettier/prettier */ function SectionContainer({ children  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "max-w-8xl mx-auto xl:max-w-8xl xl:px-0",
        children: children
    }));
};


/***/ }),

/***/ 9367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7059);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);

/* eslint-disable prettier/prettier */ 

const UtterancesComponent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\comments\\index.js -> " + "/components/comments/Utterances"
        ]
    },
    ssr: false
});
const GiscusComponent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\comments\\index.js -> " + "/components/comments/Giscus"
        ]
    },
    ssr: false
});
const DisqusComponent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\comments\\index.js -> " + "/components/comments/Disqus"
        ]
    },
    ssr: false
});
const Comments = ({ frontMatter  })=>{
    let term;
    switch((_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().comment.giscusConfig.mapping) || (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().comment.utterancesConfig.issueTerm)){
        case 'pathname':
            term = frontMatter.slug;
            break;
        case 'url':
            term = window.location.href;
            break;
        case 'title':
            term = frontMatter.title;
            break;
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "comment",
        children: [
            (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().comment) && (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().comment.provider) === 'giscus' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GiscusComponent, {
                mapping: term
            }),
            (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().comment) && (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().comment.provider) === 'utterances' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UtterancesComponent, {
                issueTerm: term
            }),
            (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().comment) && (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().comment.provider) === 'disqus' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DisqusComponent, {
                frontMatter: frontMatter
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comments);


/***/ }),

/***/ 4152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthorLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_social_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4642);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6009);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8590);




function AuthorLayout({ children , frontMatter  }) {
    const { name , avatar , occupation , company , email , twitter , linkedin , github ,  } = frontMatter;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_3__/* .PageSEO */ .TQ, {
                title: `About - ${name}`,
                description: `About me - ${name}`
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "divide-y",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pt-6 pb-8 space-y-2 md:space-y-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",
                            children: "About"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col items-center pt-8 space-x-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        src: avatar,
                                        alt: "avatar",
                                        width: "192px",
                                        height: "192px",
                                        className: "w-48 h-48 rounded-full"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight",
                                        children: name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-gray-500 dark:text-gray-400",
                                        children: occupation
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-gray-500 dark:text-gray-400",
                                        children: company
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex pt-6 space-x-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                kind: "mail",
                                                href: `mailto:${email}`
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                kind: "github",
                                                href: github
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                kind: "linkedin",
                                                href: linkedin
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                kind: "twitter",
                                                href: twitter
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2",
                                children: children
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 5105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4373);
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8215);
/* harmony import */ var _components_SectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9072);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8590);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6009);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2917);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7059);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_comments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9367);
/* harmony import */ var _components_ScrollTopAndComment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8498);

/* eslint-disable prettier/prettier */ 








const editUrl = (fileName)=>`${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_7___default().siteRepo)}/blob/master/data/blog/${fileName}`
;
const discussUrl = (slug)=>`https://mobile.twitter.com/search?q=${encodeURIComponent(`${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_7___default().siteUrl)}/blog/${slug}`)}`
;
const postDateTemplate = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
function PostLayout({ frontMatter , authorDetails , next , prev , children ,  }) {
    const { slug , fileName , date , title , tags  } = frontMatter;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_SectionContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_4__/* .BlogSEO */ .Uy, {
                url: `${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_7___default().siteUrl)}/blog/${slug}`,
                authorDetails: authorDetails,
                ...frontMatter
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ScrollTopAndComment__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                            className: "pt-6 xl:pb-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-1 text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dl", {
                                        className: "space-y-10",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                    className: "sr-only",
                                                    children: "Published on"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                    className: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                                        dateTime: date,
                                                        children: new Date(date).toLocaleDateString((_data_siteMetadata__WEBPACK_IMPORTED_MODULE_7___default().locale), postDateTemplate)
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageTitle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            children: title
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6",
                            style: {
                                gridTemplateRows: 'auto 1fr'
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
                                    className: "pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                            className: "sr-only",
                                            children: "Authors"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8",
                                                children: authorDetails.map((author)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            author.avatar && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                src: author.avatar,
                                                                width: "38px",
                                                                height: "38px",
                                                                alt: "avatar",
                                                                className: "w-10 h-10 rounded-full"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
                                                                className: "text-sm font-medium leading-5 whitespace-nowrap",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                                        className: "sr-only",
                                                                        children: "Name"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                                        className: "text-gray-900 dark:text-gray-100",
                                                                        children: author.name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                                        className: "sr-only",
                                                                        children: "Twitter"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                                        children: author.twitter && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                                            href: author.twitter,
                                                                            className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                                            children: author.twitter.replace('https://twitter.com/', '@')
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }, author.name)
                                                )
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "pt-10 pb-8 prose dark:prose-dark max-w-none",
                                            children: children
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    href: discussUrl(slug),
                                                    rel: "nofollow",
                                                    children: 'Discuss on Twitter'
                                                }),
                                                ` • `,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    href: editUrl(fileName),
                                                    children: 'View on GitHub'
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_comments__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            frontMatter: frontMatter
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2",
                                            children: [
                                                tags && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "py-4 xl:py-8",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                            className: "text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",
                                                            children: "Tags"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex flex-wrap",
                                                            children: tags.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                    text: tag
                                                                }, tag)
                                                            )
                                                        })
                                                    ]
                                                }),
                                                (next || prev) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-between py-4 xl:block xl:space-y-8 xl:py-8",
                                                    children: [
                                                        prev && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                    className: "text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",
                                                                    children: "Previous Article"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                                        href: `/blog/${prev.slug}`,
                                                                        children: prev.title
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        next && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                    className: "text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",
                                                                    children: "Next Article"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                                        href: `/blog/${next.slug}`,
                                                                        children: next.title
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "pt-4 xl:pt-8",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                href: "/blog",
                                                className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                children: "← Back to the blog"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};


/***/ }),

/***/ 3259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4373);
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8215);
/* harmony import */ var _components_SectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9072);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8590);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7059);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_utils_formatDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(811);
/* harmony import */ var _components_comments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9367);
/* harmony import */ var _components_ScrollTopAndComment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8498);









function PostLayout({ frontMatter , authorDetails , next , prev , children ,  }) {
    const { date , title  } = frontMatter;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_SectionContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_4__/* .BlogSEO */ .Uy, {
                url: `${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_5___default().siteUrl)}/blog/${frontMatter.slug}`,
                ...frontMatter
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ScrollTopAndComment__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "pb-10 space-y-1 text-center border-b border-gray-200 dark:border-gray-700",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dl", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                    className: "sr-only",
                                                    children: "Published on"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                    className: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                                        dateTime: date,
                                                        children: (0,_lib_utils_formatDate__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(date)
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageTitle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            children: title
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 ",
                            style: {
                                gridTemplateRows: 'auto 1fr'
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "pt-10 pb-8 prose dark:prose-dark max-w-none",
                                        children: children
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_comments__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    frontMatter: frontMatter
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",
                                        children: [
                                            prev && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "pt-4 xl:pt-8",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    href: `/blog/${prev.slug}`,
                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                    children: [
                                                        "← ",
                                                        prev.title
                                                    ]
                                                })
                                            }),
                                            next && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "pt-4 xl:pt-8",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    href: `/blog/${next.slug}`,
                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                    children: [
                                                        next.title,
                                                        " →"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};


/***/ }),

/***/ 414:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MDXComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1891);
/* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6852);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_mdx__WEBPACK_IMPORTED_MODULE_2__]);
_lib_mdx__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable prettier/prettier */ 

const DEFAULT_LAYOUT = 'AuthorLayout';
async function getStaticProps() {
    const authorDetails = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_2__/* .getFileBySlug */ .x7)('authors', [
        'default'
    ]);
    return {
        props: {
            authorDetails
        }
    };
}
function About({ authorDetails  }) {
    const { mdxSource , frontMatter  } = authorDetails;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MDXComponents__WEBPACK_IMPORTED_MODULE_1__/* .MDXLayoutRenderer */ .J, {
        layout: frontMatter.layout || DEFAULT_LAYOUT,
        mdxSource: mdxSource,
        frontMatter: frontMatter
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8904:
/***/ ((module) => {

"use strict";
module.exports = require("github-slugger");

/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 7219:
/***/ ((module) => {

"use strict";
module.exports = require("image-size");

/***/ }),

/***/ 8214:
/***/ ((module) => {

"use strict";
module.exports = require("mdx-bundler");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4956:
/***/ ((module) => {

"use strict";
module.exports = require("reading-time");

/***/ }),

/***/ 3614:
/***/ ((module) => {

"use strict";
module.exports = import("mdast-util-to-string");;

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-autolink-headings");;

/***/ }),

/***/ 1380:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-citation");;

/***/ }),

/***/ 9521:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-katex");;

/***/ }),

/***/ 483:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-prism-plus");;

/***/ }),

/***/ 7752:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-slug");;

/***/ }),

/***/ 1083:
/***/ ((module) => {

"use strict";
module.exports = import("remark-footnotes");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

"use strict";
module.exports = import("remark-gfm");;

/***/ }),

/***/ 9832:
/***/ ((module) => {

"use strict";
module.exports = import("remark-math");;

/***/ }),

/***/ 6016:
/***/ ((module) => {

"use strict";
module.exports = import("unist-util-visit");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,675,676,664,152,373,59,590,717,795,642,968], () => (__webpack_exec__(414)));
module.exports = __webpack_exports__;

})();