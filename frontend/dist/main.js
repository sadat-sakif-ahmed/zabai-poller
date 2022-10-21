"use strict";
(self["webpackChunkconferencing"] = self["webpackChunkconferencing"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _webrtc_webrtc_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webrtc/webrtc-routing.module */ 1974);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    // { path: '', component: PageHomeComponent },
    // { path: 'room', component: PageRoomComponent },
    // { path: 'single', component: PageSingleComponent }
    { path: '', loadChildren: () => _webrtc_webrtc_routing_module__WEBPACK_IMPORTED_MODULE_0__.WebrtcRoutingModule },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
    constructor() {
        this.title = 'conferencing';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_page_home_page_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-home/page-home.component */ 9022);
/* harmony import */ var _pages_page_room_page_room_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-room/page-room.component */ 594);
/* harmony import */ var _components_video_preview_video_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/video-preview/video-preview.component */ 4421);
/* harmony import */ var _components_video_grid_video_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/video-grid/video-grid.component */ 976);
/* harmony import */ var _components_video_card_video_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/video-card/video-card.component */ 3012);
/* harmony import */ var _components_chat_component_chat_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/chat-component/chat-component.component */ 452);
/* harmony import */ var _components_video_stream_video_stream_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/video-stream/video-stream.component */ 895);
/* harmony import */ var _pages_page_single_page_single_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-single/page-single.component */ 4177);
/* harmony import */ var _webrtc_webrtc_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./webrtc/webrtc.module */ 7786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        _webrtc_webrtc_module__WEBPACK_IMPORTED_MODULE_10__.WebrtcModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _pages_page_home_page_home_component__WEBPACK_IMPORTED_MODULE_2__.PageHomeComponent,
        _pages_page_room_page_room_component__WEBPACK_IMPORTED_MODULE_3__.PageRoomComponent,
        _components_video_preview_video_preview_component__WEBPACK_IMPORTED_MODULE_4__.VideoPreviewComponent,
        _components_video_grid_video_grid_component__WEBPACK_IMPORTED_MODULE_5__.VideoGridComponent,
        _components_video_card_video_card_component__WEBPACK_IMPORTED_MODULE_6__.VideoCardComponent,
        _components_chat_component_chat_component_component__WEBPACK_IMPORTED_MODULE_7__.ChatComponentComponent,
        _components_video_stream_video_stream_component__WEBPACK_IMPORTED_MODULE_8__.VideoStreamComponent,
        _pages_page_single_page_single_component__WEBPACK_IMPORTED_MODULE_9__.PageSingleComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        _webrtc_webrtc_module__WEBPACK_IMPORTED_MODULE_10__.WebrtcModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetComponentScope"](_pages_page_room_page_room_component__WEBPACK_IMPORTED_MODULE_3__.PageRoomComponent, [_components_video_preview_video_preview_component__WEBPACK_IMPORTED_MODULE_4__.VideoPreviewComponent,
    _components_video_grid_video_grid_component__WEBPACK_IMPORTED_MODULE_5__.VideoGridComponent,
    _components_chat_component_chat_component_component__WEBPACK_IMPORTED_MODULE_7__.ChatComponentComponent], []);


/***/ }),

/***/ 452:
/*!***********************************************************************!*\
  !*** ./src/app/components/chat-component/chat-component.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatComponentComponent": () => (/* binding */ ChatComponentComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_signaling_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/signaling.service */ 1759);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function ChatComponentComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "div")(2, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const msg_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r1.data);
  }
}

class ChatComponentComponent {
  constructor(signalService) {
    this.signalService = signalService;
    this.messages = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
  }

  ngOnInit() {
    this.signalService.getMessageQueue().subscribe({
      next: msg => {
        console.info(msg); // const val = this.messages.value;
        // val.push(msg);
        // console.log(msg);
        // this.messages.next(val);
      }
    });
  }

}

ChatComponentComponent.ɵfac = function ChatComponentComponent_Factory(t) {
  return new (t || ChatComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_signaling_service__WEBPACK_IMPORTED_MODULE_0__.SignalingService));
};

ChatComponentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ChatComponentComponent,
  selectors: [["app-chat-component"]],
  decls: 3,
  vars: 3,
  consts: [[4, "ngFor", "ngForOf"], [1, "text-lg", "font-medium"]],
  template: function ChatComponentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatComponentComponent_li_1_Template, 6, 2, "li", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.messages));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 3012:
/*!***************************************************************!*\
  !*** ./src/app/components/video-card/video-card.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoCardComponent": () => (/* binding */ VideoCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


const _c0 = ["vidStream"];
class VideoCardComponent {
    constructor() {
        this.index = 0;
        this.stream = null;
    }
    ngOnInit() { }
    startTracking(peer) {
        this.peer = peer;
        console.warn('Listening for track changes on:', peer.id);
        this.peer.conn.ontrack = (event) => {
            console.warn('Getting Tracks', event);
            this.vidStream.nativeElement.srcObject = event.streams[0];
        };
    }
}
VideoCardComponent.ɵfac = function VideoCardComponent_Factory(t) { return new (t || VideoCardComponent)(); };
VideoCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoCardComponent, selectors: [["app-video-card"]], viewQuery: function VideoCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.vidStream = _t.first);
    } }, inputs: { index: "index", peer: "peer", stream: "stream" }, decls: 6, vars: 3, consts: [[1, "relative", "block", "w-80", "h-60", "border", "border-slate-600", "bg-slate-800"], [1, "absolute", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2"], [1, "text-3xl", "font-medium"], [3, "srcObject", "autoplay"], ["vidStream", ""]], template: function VideoCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "video", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.peer.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("srcObject", ctx.stream)("autoplay", true);
    } }, encapsulation: 2 });


/***/ }),

/***/ 976:
/*!***************************************************************!*\
  !*** ./src/app/components/video-grid/video-grid.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoGridComponent": () => (/* binding */ VideoGridComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_remote_peers_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/remote-peers.service */ 9413);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _video_card_video_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../video-card/video-card.component */ 3012);





function VideoGridComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-video-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const peer_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("peer", peer_r1.conn)("index", i_r2);
} }
class VideoGridComponent {
    constructor(peerService) {
        this.peerService = peerService;
        this.peers = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    }
    ngOnInit() {
    }
}
VideoGridComponent.ɵfac = function VideoGridComponent_Factory(t) { return new (t || VideoGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_remote_peers_service__WEBPACK_IMPORTED_MODULE_0__.RemotePeersService)); };
VideoGridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VideoGridComponent, selectors: [["app-video-grid"]], inputs: { connections: "connections" }, decls: 2, vars: 1, consts: [[1, "grid", "grid-cols-4", "gap-2", "grid-flow-row-dense", "p-4"], [4, "ngFor", "ngForOf"], [3, "peer", "index"]], template: function VideoGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VideoGridComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.connections);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _video_card_video_card_component__WEBPACK_IMPORTED_MODULE_1__.VideoCardComponent], encapsulation: 2 });


/***/ }),

/***/ 4421:
/*!*********************************************************************!*\
  !*** ./src/app/components/video-preview/video-preview.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoPreviewComponent": () => (/* binding */ VideoPreviewComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



const _c0 = ["container"];
const _c1 = ["preview"];
class VideoPreviewComponent {
    constructor() {
        this.username = 'Sample User Name';
        this.streamSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.dragOffset = {
            x: 0,
            y: 0
        };
        this.videoEnabled = false;
        this.audioEnabled = true;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.container.nativeElement.ondragstart = (event) => {
            event.stopImmediatePropagation();
            this.dragOffset.x = event.offsetX;
            this.dragOffset.y = event.offsetY;
            this.preview.nativeElement.pause();
        };
        this.container.nativeElement.ondragend = (event) => {
            event.stopImmediatePropagation();
            this.preview.nativeElement.play();
        };
        this.container.nativeElement.ondrag = (event) => {
            event.stopImmediatePropagation();
            event.preventDefault();
            if (event.screenX == 0 && event.screenY == 0) {
                return;
            }
            this.container.nativeElement.style.top = `${event.clientY - this.dragOffset.y}px`;
            this.container.nativeElement.style.right = `${window.innerWidth - event.clientX - this.dragOffset.x}px`;
        };
        this.streamSource.subscribe({
            next: (stream) => {
                this.preview.nativeElement.srcObject = stream;
                this.setVideoState();
                this.setAudioState();
            }
        });
    }
    setVideoState() {
        const mediaStream = this.streamSource.value;
        mediaStream?.getVideoTracks().forEach(track => {
            track.enabled = this.videoEnabled;
        });
    }
    setAudioState() {
        const mediaStream = this.streamSource.value;
        mediaStream?.getAudioTracks().forEach(track => {
            track.enabled = this.audioEnabled;
        });
    }
    toggleVideo(event) {
        this.videoEnabled = !this.videoEnabled;
        this.setVideoState();
    }
    toggleAudio(event) {
        this.audioEnabled = !this.audioEnabled;
        this.setAudioState();
    }
}
VideoPreviewComponent.ɵfac = function VideoPreviewComponent_Factory(t) { return new (t || VideoPreviewComponent)(); };
VideoPreviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VideoPreviewComponent, selectors: [["app-video-preview"]], viewQuery: function VideoPreviewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.preview = _t.first);
    } }, inputs: { username: "username", streamSource: "streamSource" }, decls: 16, vars: 8, consts: [["draggable", "true", 1, "fixed", "z-50", "w-80", "h-60", "shadow-lg", "border", "border-slate-700", "bg-slate-800", 2, "top", "0px", "right", "0px"], ["container", ""], [1, "relative", "block", "w-full", "h-full"], [2, "transform", "rotateY(180deg)", 3, "autoplay"], ["preview", ""], [1, "absolute", "top-3", "left-3"], [1, "font-medium", "text-lg"], [1, "absolute", "flex", "flex-row", "gap-3", "bottom-3", "left-1/2", "-translate-x-1/2"], [3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6"], ["stroke-linecap", "round", "d", "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"]], template: function VideoPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "video", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoPreviewComponent_Template_button_click_9_listener($event) { return ctx.toggleVideo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoPreviewComponent_Template_button_click_13_listener($event) { return ctx.toggleAudio($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoplay", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("outline-none appearance-none focus:ring shadow rounded-full p-2 ", ctx.videoEnabled == true ? "bg-slate-600/50 ring-slate-400" : "bg-red-600 ring-red-400", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("outline-none appearance-none focus:ring shadow rounded-full p-2 ", ctx.audioEnabled == true ? "bg-slate-600/50 ring-slate-400" : "bg-red-600 ring-red-400", "");
    } }, encapsulation: 2 });


/***/ }),

/***/ 895:
/*!*******************************************************************!*\
  !*** ./src/app/components/video-stream/video-stream.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoStreamComponent": () => (/* binding */ VideoStreamComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class VideoStreamComponent {
    constructor() { }
    ngOnInit() {
    }
}
VideoStreamComponent.ɵfac = function VideoStreamComponent_Factory(t) { return new (t || VideoStreamComponent)(); };
VideoStreamComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoStreamComponent, selectors: [["app-video-stream"]], decls: 2, vars: 0, template: function VideoStreamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "video-stream works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlby1zdHJlYW0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9022:
/*!********************************************************!*\
  !*** ./src/app/pages/page-home/page-home.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHomeComponent": () => (/* binding */ PageHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);






const _c0 = ["createRoom"];
const _c1 = ["joinRoom"];
class PageHomeComponent {
    constructor(formBuilder, http, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.createRoomForm = this.formBuilder.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            roomname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
        });
        this.joinRoomForm = this.formBuilder.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            roomname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
        });
    }
    ngOnInit() {
    }
    toggleCreate(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.createRoom.nativeElement.classList.toggle('hidden');
    }
    dismissCreate(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.createRoom.nativeElement.classList.toggle('hidden');
    }
    createRoomSubmit() {
        console.info(this.createRoomForm.valid, this.createRoomForm.value);
        const formData = new FormData();
        formData.append('data', JSON.stringify(this.createRoomForm.value));
        this.http.post('socket/create/room/', formData).subscribe({
            next: (resp) => {
                console.info(resp);
            },
            error: (err) => {
                console.error(err);
            }
        });
    }
    toggleJoin(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.joinRoom.nativeElement.classList.toggle('hidden');
    }
    dismissJoin(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.joinRoom.nativeElement.classList.toggle('hidden');
    }
    joinRoomSubmit() {
        console.info(this.joinRoomForm.valid, this.joinRoomForm.value);
        const formData = new FormData();
        formData.append('data', JSON.stringify(this.joinRoomForm.value));
        this.http.post('socket/join/room/', formData).subscribe({
            next: (resp) => {
                console.info(resp);
            },
            error: (err) => {
                console.error(err);
            }
        });
    }
    navigateToRoom(username) {
        window.localStorage.setItem('username', username);
        this.router.navigate(['/', 'room']);
    }
    stopPropagation(event) {
        event.stopImmediatePropagation();
    }
}
PageHomeComponent.ɵfac = function PageHomeComponent_Factory(t) { return new (t || PageHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
PageHomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageHomeComponent, selectors: [["app-page-home"]], viewQuery: function PageHomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.createRoom = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.joinRoom = _t.first);
    } }, decls: 44, vars: 2, consts: [[1, "block", "min-h-screen", "w-full", "overflow-auto"], [1, "flex", "flex-row", "items-center", "py-4", "px-6", "bg-indigo-700", "shadow"], [1, "text-xl", "font-medium"], [1, "flex", "flex-col", "lg:flex-row"], [1, "w-full", "lg:w-1/2"], [1, "py-8", "px-6", "lg:py-16", "lg:px-12"], [1, "text-3xl", "lg:text-5xl", "font-bold"], [1, "inline-block", "pb-4"], [1, "inline-block", "text-indigo-600", "pb-4"], [1, "text-lg", "text-slate-300"], [1, "flex", "flex-col", "lg:flex-row", "gap-4", "pt-16"], [1, "px-4", "py-3", "rounded", "border", "shadow", "transition-all", "duration-300", "ease-in-out", "bg-indigo-600", "border-indigo-700", "hover:bg-indigo-500", 3, "click"], [1, "px-4", "py-3", "rounded", "border", "shadow", "transition-all", "duration-300", "ease-in-out", "text-indigo-800", "bg-indigo-300", "border-indigo-400", "hover:bg-indigo-400", 3, "click"], [1, "fixed", "hidden", "inset-0", "bg-indigo-900/80", 3, "click"], ["createRoom", ""], [1, "absolute", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", 3, "click"], [1, "flex", "flex-col", "px-6", "py-4", "w-96", "rounded", "shadow", "bg-slate-800"], [1, "text-xl", "font-bold"], [1, "block", "border", "border-indigo-600"], [1, "flex", "flex-col", "gap-3", 3, "formGroup", "submit"], ["formControlName", "username", "type", "text", "name", "username", "id", "username-field-create", "placeholder", "Enter username for room", 1, "rounded", "px-3", "py-2", "w-full", "outline-none", "appearance-none", "border", "transition-all", "duration-200", "ease-in-out", "focus:ring", "border-slate-600", "bg-slate-700", "text-slate-50", "focus:border-indigo-60", "focus:ring-indigo-600"], ["formControlName", "roomname", "type", "text", "name", "roomname", "id", "roomname-field-create", "placeholder", "Enter name of room", 1, "rounded", "px-3", "py-2", "w-full", "outline-none", "appearance-none", "border", "transition-all", "duration-200", "ease-in-out", "focus:ring", "border-slate-600", "bg-slate-700", "text-slate-50", "focus:border-indigo-60", "focus:ring-indigo-600"], ["type", "submit", 1, "rounded", "px-3", "py-2", "w-full", "outline-none", "appearance-none", "border", "transition-all", "duration-200", "ease-in-out", "focus:ring", "border-slate-600", "bg-indigo-700", "text-slate-50", "focus:border-indigo-60", "focus:ring-indigo-600", "hover:bg-indigo-600"], ["joinRoom", ""]], template: function PageHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Conferencing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h1", 6)(8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Easy Conferencing with");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Web RTC and django.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " It is as simple as implementing the room based broadcast mechanism. To get started, simply add your email address and create a room. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10)(15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageHomeComponent_Template_button_click_15_listener($event) { return ctx.toggleCreate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Create Room ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageHomeComponent_Template_button_click_17_listener($event) { return ctx.toggleJoin($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Join Room ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageHomeComponent_Template_div_click_20_listener($event) { return ctx.dismissCreate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageHomeComponent_Template_div_click_22_listener($event) { return ctx.stopPropagation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16)(24, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Create Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function PageHomeComponent_Template_form_submit_27_listener() { return ctx.createRoomSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 20)(29, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Create and Enter Room ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 13, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageHomeComponent_Template_div_click_32_listener($event) { return ctx.dismissJoin($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageHomeComponent_Template_div_click_34_listener($event) { return ctx.stopPropagation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 16)(36, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Join Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function PageHomeComponent_Template_form_submit_39_listener() { return ctx.joinRoomSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 20)(41, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Join Existing Room ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.createRoomForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.joinRoomForm);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName], encapsulation: 2 });


/***/ }),

/***/ 594:
/*!********************************************************!*\
  !*** ./src/app/pages/page-room/page-room.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageRoomComponent": () => (/* binding */ PageRoomComponent)
/* harmony export */ });
/* harmony import */ var D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_remote_peers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/remote-peers.service */ 9413);
/* harmony import */ var src_app_services_signaling_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/signaling.service */ 1759);





class PageRoomComponent {
  constructor(peerService, signalService) {
    this.peerService = peerService;
    this.signalService = signalService;
    this.servers = ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302', 'stun:stun3.l.google.com:19302', 'stun:stun4.l.google.com:19302', 'stun:stun.ekiga.net', 'stun:stun.ideasip.com', 'stun:stun.iptel.org', 'stun:stun.rixtelecom.se', 'stun:stun.schlund.de', 'stun:stunserver.org', 'stun:stun.softjoys.com', 'stun:stun.voiparound.com', 'stun:stun.voipbuster.com', 'stun:stun.voipstunt.com'];
    this.roomName = null;
    this.userName = null;
    this.selfStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.remotes = [];
    this.roomName = window.localStorage.getItem('roomname');
    this.userName = window.localStorage.getItem('username');
  }

  ngOnInit() {
    this.getUserMedia();
  }

  getUserMedia() {
    var _this = this;

    return (0,D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let mediaStream = yield navigator.mediaDevices.getUserMedia({
        audio: true,
        video: {
          width: {
            min: 320,
            ideal: 720,
            max: 1280
          },
          height: {
            min: 240,
            ideal: 540,
            max: 720
          }
        }
      });

      _this.selfStream.next(mediaStream);

      _this.signalService.getMessageQueue().subscribe({
        next: msg => {
          console.log(msg);

          switch (msg.type) {
            case 'offer':
              _this.peerService.createStreamAnswer(_this.remotes[0].conn, msg.data);

              break;

            case 'answer':
              _this.remotes[0].conn.setRemoteDescription(msg.data).then(() => {
                _this.selfStream.value?.getTracks().forEach(track => {
                  _this.remotes[0].conn.addTrack(track);
                });
              });

              break;

            case 'candidate':
              if (msg.data != null) {
                let candidate = new RTCIceCandidate(msg.data);

                _this.remotes[0].conn.addIceCandidate(candidate);
              }

              break;

            case 'text':
              break;
          }
        }
      });

      let conn = yield _this.peerService.createStreamOffer(mediaStream);

      _this.remotes.push({
        id: _this.userName,
        conn
      });
    })();
  }

}

PageRoomComponent.ɵfac = function PageRoomComponent_Factory(t) {
  return new (t || PageRoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_remote_peers_service__WEBPACK_IMPORTED_MODULE_1__.RemotePeersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_signaling_service__WEBPACK_IMPORTED_MODULE_2__.SignalingService));
};

PageRoomComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PageRoomComponent,
  selectors: [["app-page-room"]],
  decls: 8,
  vars: 4,
  consts: [[1, "block", "min-h-screen", "w-full", "overflow-auto"], [1, "flex", "flex-row", "items-center", "justify-between", "py-4", "px-6", "bg-indigo-700", "shadow"], [1, "text-xl", "font-medium"], [1, "flex", "flex-row", "gap-4"], [3, "streamSource"], [3, "connections"]],
  template: function PageRoomComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-video-preview", 4)(6, "app-video-grid", 5)(7, "app-chat-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Joined Room ", ctx.roomName, " as ", ctx.userName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("streamSource", ctx.selfStream);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("connections", ctx.remotes);
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 4177:
/*!************************************************************!*\
  !*** ./src/app/pages/page-single/page-single.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageSingleComponent": () => (/* binding */ PageSingleComponent)
/* harmony export */ });
/* harmony import */ var D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_remote_peers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/remote-peers.service */ 9413);
/* harmony import */ var src_app_services_signaling_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/signaling.service */ 1759);





const _c0 = ["localVideo"];
const _c1 = ["remoteVideo"];
class PageSingleComponent {
  constructor(peerConnection, signal) {
    this.peerConnection = peerConnection;
    this.signal = signal;
  }

  ngOnInit() {
    if (this.connection == undefined) {
      this.connection = this.peerConnection.createNewConnection();
    }

    this.signal.getMessageQueue().subscribe({
      next: msg => {
        switch (msg.type) {
          case 'offer':
            this.connection.ontrack = e => {
              this.remoteVideo.nativeElement.srcObject = e.streams[0];
            };

            this.localStream.getTracks().forEach(track => {
              this.connection.addTrack(track, this.localStream);
            });
            this.peerConnection.createAnswer(this.connection, msg.data);
            break;

          case 'answer':
            this.connection.setRemoteDescription(msg.data).then(() => {});
            break;

          case 'stream':
            this.localStream.getTracks().forEach(track => {
              this.connection.addTrack(track, this.localStream);
            });
            break;

          case 'candidate':
            if (msg.data != null) {
              let candidate = new RTCIceCandidate(msg.data);
              this.connection.addIceCandidate(candidate);
            }

            break;
        }
      }
    });
  }

  startMedia() {
    var _this = this;

    return (0,D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.localStream = yield navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
      });
      _this.localVideo.nativeElement.srcObject = _this.localStream;
    })();
  }

  call() {
    var _this2 = this;

    return (0,D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.connection = yield _this2.peerConnection.createNewConnection();

      _this2.localStream.getTracks().forEach(track => {
        _this2.connection.addTrack(track, _this2.localStream);

        _this2.connection.ontrack = e => {
          console.log(e.streams.length);
          _this2.remoteVideo.nativeElement.srcObject = e.streams[0];
        };
      });

      yield _this2.peerConnection.createOffer(_this2.connection);
    })();
  }

  hangup() {}

}

PageSingleComponent.ɵfac = function PageSingleComponent_Factory(t) {
  return new (t || PageSingleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_remote_peers_service__WEBPACK_IMPORTED_MODULE_1__.RemotePeersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_signaling_service__WEBPACK_IMPORTED_MODULE_2__.SignalingService));
};

PageSingleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PageSingleComponent,
  selectors: [["app-page-single"]],
  viewQuery: function PageSingleComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.localVideo = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.remoteVideo = _t.first);
    }
  },
  decls: 14,
  vars: 6,
  consts: [[1, "flex", "flex-row"], [1, "w-1/2"], [1, "border", "border-slate-600", "bg-slate-800", "w-80", "h-60", 3, "controls", "autoplay", "muted"], ["localVideo", ""], ["remoteVideo", ""], [1, "border", "border-indigo-600", "bg-indigo-800", "px-3", "py-2", 3, "click"]],
  template: function PageSingleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "video", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "video", 2, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 0)(8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PageSingleComponent_Template_button_click_8_listener() {
        return ctx.startMedia();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Get Media");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PageSingleComponent_Template_button_click_10_listener() {
        return ctx.call();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Call");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PageSingleComponent_Template_button_click_12_listener() {
        return ctx.hangup();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Hangup");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("controls", true)("autoplay", true)("muted", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("controls", true)("autoplay", true)("muted", true);
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 9413:
/*!**************************************************!*\
  !*** ./src/app/services/remote-peers.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemotePeersService": () => (/* binding */ RemotePeersService)
/* harmony export */ });
/* harmony import */ var D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _signaling_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signaling.service */ 1759);



class RemotePeersService {
  constructor(signalService) {
    this.signalService = signalService;
  }

  createOffer(conn) {
    var _this = this;

    return (0,D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let description = yield conn.createOffer({
        offerToReceiveAudio: true,
        offerToReceiveVideo: true
      });
      yield conn.setLocalDescription(description);

      _this.signalService.sendMessage({
        type: 'offer',
        data: description
      });
    })();
  }

  createAnswer(conn, offer) {
    var _this2 = this;

    return (0,D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield conn.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = yield conn.createAnswer({
        offerToReceiveAudio: true,
        offerToReceiveVideo: true
      });
      yield conn.setLocalDescription(answer);

      _this2.signalService.sendMessage({
        type: 'answer',
        data: conn.localDescription
      });
    })();
  }

  createStreamAnswer(conn, offerData) {
    var _this3 = this;

    return (0,D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield conn.setRemoteDescription(offerData);
      const desc = yield conn.createAnswer();
      yield conn.setLocalDescription(desc);

      _this3.signalService.sendMessage({
        type: 'answer',
        data: conn.localDescription
      });
    })();
  }

  createStreamOffer(stream) {
    var _this4 = this;

    return (0,D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let conn = _this4.createNewConnection();

      stream.getTracks().forEach(track => conn.addTrack(track, stream));
      let desc = yield conn.createOffer({
        offerToReceiveAudio: true,
        offerToReceiveVideo: true
      });
      yield conn.setLocalDescription(desc);

      _this4.signalService.sendMessage({
        type: 'offer',
        data: desc
      });

      return conn;
    })();
  }

  establishConnection(conn, answerData, stream) {
    return (0,D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield conn.setRemoteDescription(answerData);
      stream.getTracks().forEach(track => {
        conn.addTrack(track, stream);
      });
    })();
  }

  createNewConnection() {
    let conn = new RTCPeerConnection({
      iceServers: [{
        urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302', 'stun:stun3.l.google.com:19302']
      }]
    });

    conn.onicecandidate = event => {
      console.info('Candidate Changed');
      this.signalService.sendMessage({
        type: 'candidate',
        data: event.candidate
      });
    };

    conn.onicegatheringstatechange = event => {
      switch (conn.iceConnectionState) {
        case 'closed':
        case 'disconnected':
        case 'failed':
          console.error('Failed to connect');
          break;
      }
    };

    conn.onsignalingstatechange = event => {
      console.info(event);

      switch (conn.signalingState) {
        case 'closed':
          console.error('Connection Closed');
          break;
      }
    };

    return conn;
  }

  createConnectionObject(onIceCandidateChange, onConnectionStateChange) {
    let conn = new RTCPeerConnection({
      iceServers: [{
        urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302', 'stun:stun3.l.google.com:19302']
      }]
    });

    conn.onicecandidate = event => {
      this.signalService.sendMessage({
        type: 'candidate',
        data: event.candidate
      });
      onIceCandidateChange(event);
    };

    conn.onicegatheringstatechange = event => {
      console.info(event);

      switch (conn.iceConnectionState) {
        case 'closed':
        case 'disconnected':
        case 'failed':
          console.error('Failed to connect');
          break;
      }
    };

    conn.onsignalingstatechange = event => {
      onConnectionStateChange(event);

      switch (conn.signalingState) {
        case 'closed':
          console.error('Connection Closed');
          break;
      }
    };

    return conn;
  }

}

RemotePeersService.ɵfac = function RemotePeersService_Factory(t) {
  return new (t || RemotePeersService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_signaling_service__WEBPACK_IMPORTED_MODULE_1__.SignalingService));
};

RemotePeersService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: RemotePeersService,
  factory: RemotePeersService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1759:
/*!***********************************************!*\
  !*** ./src/app/services/signaling.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignalingService": () => (/* binding */ SignalingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class SignalingService {
    constructor() {
        this.messages = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.url = 'ws://192.168.5.27:8081/';
        this.socket = new WebSocket(this.url);
        this.socket.onopen = () => {
            console.log('WebSocket connection open');
        };
        this.socket.onmessage = (message) => {
            this.messages.next(JSON.parse(message.data));
        };
    }
    sendMessage(message) {
        this.socket.send(JSON.stringify(message));
    }
    getMessageQueue() {
        return this.messages.asObservable();
    }
}
SignalingService.ɵfac = function SignalingService_Factory(t) { return new (t || SignalingService)(); };
SignalingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SignalingService, factory: SignalingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1268:
/*!******************************************************************!*\
  !*** ./src/app/webrtc/components/chat-box/chat-box.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatBoxComponent": () => (/* binding */ ChatBoxComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _services_signal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/signal.service */ 39);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);







function ChatBoxComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8)(2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const message_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r1.msg);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r1.from);
  }
}

class ChatBoxComponent {
  constructor(signal) {
    this.signal = signal;
    this.username = '';
    this.chatMessage = '';
    this.messages = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
  }

  ngOnInit() {
    this.signal.getMessages().subscribe({
      next: msg => {
        switch (msg.type) {
          case _services_signal_service__WEBPACK_IMPORTED_MODULE_0__.Signal.Text:
            let msgs = this.messages.value;
            msgs.push(msg.data);
            this.messages.next(msgs);
        }
      }
    });
  }

  sendMessage() {
    this.signal.sendSignal(_services_signal_service__WEBPACK_IMPORTED_MODULE_0__.Signal.Text, {
      from: this.username,
      msg: this.chatMessage
    });
    this.chatMessage = '';
  }

}

ChatBoxComponent.ɵfac = function ChatBoxComponent_Factory(t) {
  return new (t || ChatBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_signal_service__WEBPACK_IMPORTED_MODULE_0__.SignalService));
};

ChatBoxComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ChatBoxComponent,
  selectors: [["app-chat-box"]],
  inputs: {
    username: "username"
  },
  decls: 11,
  vars: 4,
  consts: [[1, "flex", "flex-col", "w-64", "bg-slate-600", "px-3", "py-2"], [4, "ngFor", "ngForOf"], [1, "flex"], ["title", "Chat Message", "placeholder", "Enter Message Here...", "type", "text", 1, "appearance-none", "outline-none", "rounded", "border", "px-3", "py-2", "transition-all", "duration-200", "ease-out", "border-slate-700", "bg-slate-800", "focus:ring", "focus:border-indigo-600", "focus:ring-indigo-600/50", 3, "ngModel", "ngModelChange"], [1, "outline-none", "appearance-none", "focus:ring", "shadow", "rounded-full", "p-2", 3, "click"], [1, "sr-only"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"], [1, "py-2", "px-3"], [1, "block", "w-full"], [1, "block", "w-full", "text-xs", "text-right", "italic"]],
  template: function ChatBoxComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatBoxComponent_ng_container_2_Template, 6, 2, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ChatBoxComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.chatMessage = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatBoxComponent_Template_button_click_6_listener() {
        return ctx.sendMessage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Video Toggle");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "svg", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx.messages));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.chatMessage);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 9083:
/*!********************************************************************!*\
  !*** ./src/app/webrtc/components/room-poll/room-poll.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomPollComponent": () => (/* binding */ RoomPollComponent)
/* harmony export */ });
/* harmony import */ var _services_signal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/signal.service */ 39);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);






function RoomPollComponent_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoomPollComponent_div_1_ng_container_3_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const option_r4 = restoredCtx.$implicit; const poll_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.sendResponse(poll_r2, option_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", option_r4.value, " ", option_r4.count ? option_r4.count : 0, "");
} }
function RoomPollComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "h6", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RoomPollComponent_div_1_ng_container_3_Template, 3, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const poll_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](poll_r2.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", poll_r2.options);
} }
function RoomPollComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoomPollComponent_ng_container_6_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const option_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.sendResponse(ctx_r9.draftPoll, option_r8)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r8);
} }
class RoomPollComponent {
    constructor(signal, http) {
        this.signal = signal;
        this.http = http;
        this.username = '';
        this.roomname = '';
        this.pollQuestion = '';
        this.pollOption = '';
        this.pollOptions = [];
        this.pollResponses = [];
        this.polls = [];
        this.draftPoll = {
            question: '',
            options: []
        };
    }
    ngOnInit() {
        this.preloadPolls();
        this.signal.getMessages().subscribe({
            next: (msg) => {
                switch (msg.type) {
                    case _services_signal_service__WEBPACK_IMPORTED_MODULE_0__.Signal.PollQuery:
                        this.polls.push(msg.data);
                        console.info(msg);
                        break;
                    case _services_signal_service__WEBPACK_IMPORTED_MODULE_0__.Signal.PollResponse:
                        console.info(msg);
                        this.updateCount(msg.data);
                        break;
                    case _services_signal_service__WEBPACK_IMPORTED_MODULE_0__.Signal.PollOption:
                        console.info(msg);
                        break;
                }
            }
        });
    }
    preloadPolls() {
        const formData = new FormData();
        formData.append('roomname', this.roomname);
        this.http.post('api/poll/get', formData).subscribe({
            next: (resp) => {
                this.polls = resp;
            }
        });
    }
    createPollQuestion() {
        this.draftPoll.question = this.pollQuestion;
        // this.signal.sendSignal(Signal.PollQuery, { id: 'poll_' + Math.random() * 100000, owner: this.username, question: this.pollQuestion });
    }
    addPollOption() {
        if (this.pollOption != '') {
            this.draftPoll.options.push(this.pollOption);
            this.pollOption = '';
        }
        // this.signal.sendSignal(Signal.PollOption, {})
    }
    postPoll() {
        const formData = new FormData();
        formData.append('username', this.username);
        formData.append('roomname', this.roomname);
        formData.append('question', this.draftPoll.question);
        for (let option of this.draftPoll.options) {
            formData.append('option', option);
        }
        this.http.post('api/poll/create', formData).subscribe({
            next: (resp) => {
                this.polls.push(resp);
                this.signal.sendSignal(_services_signal_service__WEBPACK_IMPORTED_MODULE_0__.Signal.PollQuery, resp);
            }
        });
    }
    sendResponse(poll, option) {
        const formData = new FormData();
        formData.append('option', option.id);
        formData.append('respondee', this.username);
        this.http.post('api/poll/respond', formData).subscribe({
            next: (resp) => {
                this.updateCount(resp);
                this.signal.sendSignal(_services_signal_service__WEBPACK_IMPORTED_MODULE_0__.Signal.PollResponse, resp);
            }
        });
    }
    updateCount(resp) {
        let poll = this.polls.find(poll => poll.id == resp.poll);
        let option = poll.options.find((opt) => opt.id == resp.option);
        option.count = resp.count;
        console.info(this.polls);
    }
}
RoomPollComponent.ɵfac = function RoomPollComponent_Factory(t) { return new (t || RoomPollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_signal_service__WEBPACK_IMPORTED_MODULE_0__.SignalService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
RoomPollComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RoomPollComponent, selectors: [["app-room-poll"]], inputs: { username: "username", roomname: "roomname" }, decls: 24, vars: 5, consts: [[1, "flex", "flex-col", "p-4", "rounded", "bg-slate-700"], ["class", "flex flex-col", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col"], [1, "text-lg", "font-medium", "mb-4"], [1, "flex", "flex-col", "border", "p-3"], [4, "ngFor", "ngForOf"], [1, "flex", "gap-4"], ["title", "Chat Message", "placeholder", "Enter Query Here...", "type", "text", 1, "appearance-none", "outline-none", "rounded", "border", "px-3", "py-2", "w-full", "transition-all", "duration-200", "ease-out", "border-slate-700", "bg-slate-800", "focus:ring", "focus:border-indigo-600", "focus:ring-indigo-600/50", 3, "ngModel", "ngModelChange"], [1, "outline-none", "appearance-none", "focus:ring", "shadow", "rounded-full", "p-2", 3, "click"], [1, "sr-only"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"], ["title", "Chat Message", "placeholder", "Enter Message Here...", "type", "text", 1, "appearance-none", "outline-none", "rounded", "border", "px-3", "py-2", "w-full", "transition-all", "duration-200", "ease-out", "border-slate-700", "bg-slate-800", "focus:ring", "focus:border-indigo-600", "focus:ring-indigo-600/50", 3, "ngModel", "ngModelChange"], [1, "p-3"], [1, "px-3", "py-2", 3, "click"], [1, "px-3", "py-2", "border-y", 3, "click"]], template: function RoomPollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RoomPollComponent_div_1_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RoomPollComponent_ng_container_6_Template, 3, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RoomPollComponent_Template_input_ngModelChange_8_listener($event) { return ctx.pollOption = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoomPollComponent_Template_button_click_9_listener() { return ctx.addPollOption(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Video Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6)(15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RoomPollComponent_Template_input_ngModelChange_15_listener($event) { return ctx.pollQuestion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoomPollComponent_Template_button_click_16_listener() { return ctx.createPollQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Video Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13)(22, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoomPollComponent_Template_button_click_22_listener() { return ctx.postPoll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Submit Poll ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.polls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.draftPoll.question);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.draftPoll.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.pollOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.pollQuestion);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb29tLXBvbGwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3398:
/*!**********************************************************************!*\
  !*** ./src/app/webrtc/components/self-video/self-video.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelfVideoComponent": () => (/* binding */ SelfVideoComponent)
/* harmony export */ });
/* harmony import */ var D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




const _c0 = ["container"];
const _c1 = ["preview"];
class SelfVideoComponent {
  constructor() {
    this.username = 'Sample User Name';
    this.source = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.dragOffset = {
      x: 0,
      y: 0
    };
    this.videoEnabled = true;
    this.audioEnabled = true;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.container.nativeElement.ondragstart = event => {
      event.stopImmediatePropagation();
      this.dragOffset.x = event.offsetX;
      this.dragOffset.y = event.offsetY;
      this.preview.nativeElement.pause();
    };

    this.container.nativeElement.ondragend = event => {
      event.stopImmediatePropagation();
      this.preview.nativeElement.play();
    };

    this.container.nativeElement.ondrag = event => {
      event.stopImmediatePropagation();
      event.preventDefault();

      if (event.screenX == 0 && event.screenY == 0) {
        return;
      }

      this.container.nativeElement.style.top = `${event.clientY - this.dragOffset.y}px`;
      this.container.nativeElement.style.right = `${window.innerWidth - event.clientX - this.dragOffset.x}px`;
    };

    this.source.subscribe({
      next: stream => {
        if (stream == null) {
          return;
        }

        this.preview.nativeElement.srcObject = stream;
        this.setVideoState();
        this.setAudioState();
      }
    });
  }

  setVideoState() {
    var _this = this;

    return (0,D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.source.value == null) {
        return;
      }

      const mediaStream = _this.source.value;
      mediaStream?.getVideoTracks().forEach(track => {
        track.enabled = _this.videoEnabled;
      });

      if (mediaStream && mediaStream.getVideoTracks().length < 1 && _this.videoEnabled == true) {
        let newStream = yield navigator.mediaDevices.getUserMedia({
          video: true
        });
        yield newStream.getVideoTracks().forEach(track => mediaStream?.addTrack(track)); // this.source.next(newStream);
      }
    })();
  }

  setAudioState() {
    var _this2 = this;

    return (0,D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.source.value == null) {
        return;
      }

      const mediaStream = _this2.source.value;
      mediaStream?.getAudioTracks().forEach(track => {
        track.enabled = _this2.audioEnabled;
      });

      if (mediaStream && mediaStream.getAudioTracks().length < 1 && _this2.audioEnabled == true) {
        let newStream = yield navigator.mediaDevices.getUserMedia({
          audio: true
        });
        yield newStream.getAudioTracks().forEach(track => mediaStream?.addTrack(track)); // this.source.next(newStream);
      }
    })();
  }

  toggleVideo(event) {
    this.videoEnabled = !this.videoEnabled;
    this.setVideoState();
  }

  toggleAudio(event) {
    this.audioEnabled = !this.audioEnabled;
    this.setAudioState();
  }

}

SelfVideoComponent.ɵfac = function SelfVideoComponent_Factory(t) {
  return new (t || SelfVideoComponent)();
};

SelfVideoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SelfVideoComponent,
  selectors: [["app-self-video"]],
  viewQuery: function SelfVideoComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.preview = _t.first);
    }
  },
  inputs: {
    username: "username",
    source: "source"
  },
  decls: 20,
  vars: 8,
  consts: [["draggable", "true", 1, "fixed", "z-50", "w-80", "h-60", "shadow-lg", "border", "border-slate-700", "bg-slate-800", 2, "top", "0px", "right", "0px"], ["container", ""], [1, "relative", "block", "w-full", "h-full"], [3, "autoplay"], ["preview", ""], [1, "absolute", "top-3", "left-3"], [1, "font-medium", "text-lg"], [1, "absolute", "flex", "flex-row", "gap-3", "bottom-3", "left-1/2", "-translate-x-1/2"], [3, "click"], [1, "sr-only"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6"], ["stroke-linecap", "round", "d", "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"]],
  template: function SelfVideoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "video", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7)(9, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelfVideoComponent_Template_button_click_9_listener($event) {
        return ctx.toggleVideo($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Video Toggle");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "svg", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "path", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " 3 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelfVideoComponent_Template_button_click_15_listener($event) {
        return ctx.toggleAudio($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Audio Toggle");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "svg", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "path", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("autoplay", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.username);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("outline-none appearance-none focus:ring shadow rounded-full p-2 ", ctx.videoEnabled == true ? "bg-slate-600/50 ring-slate-400" : "bg-red-600 ring-red-400", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("outline-none appearance-none focus:ring shadow rounded-full p-2 ", ctx.audioEnabled == true ? "bg-slate-600/50 ring-slate-400" : "bg-red-600 ring-red-400", "");
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 9385:
/*!***************************************************************!*\
  !*** ./src/app/webrtc/pages/page-home/page-home.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHomeComponent": () => (/* binding */ PageHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);






const _c0 = ["createRoom"];
const _c1 = ["joinRoom"];
class PageHomeComponent {
    constructor(formBuilder, http, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.createRoomForm = this.formBuilder.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            roomname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
        });
        this.joinRoomForm = this.formBuilder.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            roomname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
        });
    }
    ngOnInit() {
    }
    toggleCreate(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.createRoom.nativeElement.classList.toggle('hidden');
    }
    dismissCreate(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.createRoom.nativeElement.classList.toggle('hidden');
    }
    createRoomSubmit() {
        console.info(this.createRoomForm.valid, this.createRoomForm.value);
        const formData = new FormData();
        const jsonData = this.createRoomForm.value;
        for (let item of Object.keys(jsonData)) {
            formData.append(item, jsonData[item]);
            console.log(item, jsonData[item]);
        }
        // this.navigateToLobby();
        //todo: connect this to actual server
        this.http.post('api/user/create', formData).subscribe({
            next: (resp) => {
                console.info(resp);
                window.sessionStorage.setItem('session', JSON.stringify(resp));
                this.navigateToLobby();
            },
            error: (err) => {
                console.error(err);
            }
        });
    }
    toggleJoin(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.joinRoom.nativeElement.classList.toggle('hidden');
    }
    dismissJoin(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.joinRoom.nativeElement.classList.toggle('hidden');
    }
    joinRoomSubmit() {
        console.info(this.joinRoomForm.valid, this.joinRoomForm.value);
        const formData = new FormData();
        const jsonData = this.joinRoomForm.value;
        for (let item of Object.keys(jsonData)) {
            formData.append(item, jsonData[item]);
            console.log(item, jsonData[item]);
        }
        // this.navigateToLobby();
        //todo: connect this to actual server
        this.http.post('api/user/get', formData).subscribe({
            next: (resp) => {
                console.info(resp);
                window.sessionStorage.setItem('session', JSON.stringify(resp));
                this.navigateToLobby();
            },
            error: (err) => {
                console.error(err);
            }
        });
    }
    navigateToLobby() {
        this.router.navigate(['/', 'lobby']);
    }
    stopPropagation(event) {
        event.stopImmediatePropagation();
    }
}
PageHomeComponent.ɵfac = function PageHomeComponent_Factory(t) { return new (t || PageHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
PageHomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageHomeComponent, selectors: [["app-page-home"]], viewQuery: function PageHomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.createRoom = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.joinRoom = _t.first);
    } }, decls: 44, vars: 2, consts: [[1, "block", "min-h-screen", "w-full", "overflow-auto"], [1, "flex", "flex-row", "items-center", "py-4", "px-6", "bg-indigo-700", "shadow"], [1, "text-xl", "font-medium"], [1, "flex", "flex-col", "lg:flex-row"], [1, "w-full", "lg:w-1/2"], [1, "py-8", "px-6", "lg:py-16", "lg:px-12"], [1, "text-3xl", "lg:text-5xl", "font-bold"], [1, "inline-block", "pb-4"], [1, "inline-block", "text-indigo-600", "pb-4"], [1, "text-lg", "text-slate-300"], [1, "flex", "flex-col", "lg:flex-row", "gap-4", "pt-16"], [1, "px-4", "py-3", "rounded", "border", "shadow", "transition-all", "duration-300", "ease-in-out", "bg-indigo-600", "border-indigo-700", "hover:bg-indigo-500", 3, "click"], [1, "px-4", "py-3", "rounded", "border", "shadow", "transition-all", "duration-300", "ease-in-out", "text-indigo-800", "bg-indigo-300", "border-indigo-400", "hover:bg-indigo-400", 3, "click"], [1, "fixed", "hidden", "inset-0", "bg-indigo-900/80", 3, "click"], ["createRoom", ""], [1, "absolute", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", 3, "click"], [1, "flex", "flex-col", "px-6", "py-4", "w-96", "rounded", "shadow", "bg-slate-800"], [1, "text-xl", "font-bold"], [1, "block", "border", "border-indigo-600"], [1, "flex", "flex-col", "gap-3", 3, "formGroup", "submit"], ["formControlName", "username", "type", "text", "name", "username", "id", "username-field-create", "placeholder", "Enter username for room", 1, "rounded", "px-3", "py-2", "w-full", "outline-none", "appearance-none", "border", "transition-all", "duration-200", "ease-in-out", "focus:ring", "border-slate-600", "bg-slate-700", "text-slate-50", "focus:border-indigo-60", "focus:ring-indigo-600"], ["formControlName", "roomname", "type", "text", "name", "roomname", "id", "roomname-field-create", "placeholder", "Enter name of room", 1, "rounded", "px-3", "py-2", "w-full", "outline-none", "appearance-none", "border", "transition-all", "duration-200", "ease-in-out", "focus:ring", "border-slate-600", "bg-slate-700", "text-slate-50", "focus:border-indigo-60", "focus:ring-indigo-600"], ["type", "submit", 1, "rounded", "px-3", "py-2", "w-full", "outline-none", "appearance-none", "border", "transition-all", "duration-200", "ease-in-out", "focus:ring", "border-slate-600", "bg-indigo-700", "text-slate-50", "focus:border-indigo-60", "focus:ring-indigo-600", "hover:bg-indigo-600"], ["joinRoom", ""], [1, "block", "border", "border-red-600"]], template: function PageHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Conferencing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h1", 6)(8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Easy Conferencing with");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Web RTC and django.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " It is as simple as implementing the room based broadcast mechanism. To get started, simply add your email address and create a room. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10)(15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageHomeComponent_Template_button_click_15_listener($event) { return ctx.toggleCreate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Create Room ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageHomeComponent_Template_button_click_17_listener($event) { return ctx.toggleJoin($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Join Room ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageHomeComponent_Template_div_click_20_listener($event) { return ctx.dismissCreate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageHomeComponent_Template_div_click_22_listener($event) { return ctx.stopPropagation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16)(24, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Create Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function PageHomeComponent_Template_form_submit_27_listener() { return ctx.createRoomSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 20)(29, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Create and Enter Room ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 13, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageHomeComponent_Template_div_click_32_listener($event) { return ctx.dismissJoin($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageHomeComponent_Template_div_click_34_listener($event) { return ctx.stopPropagation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 16)(36, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Join Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function PageHomeComponent_Template_form_submit_39_listener() { return ctx.joinRoomSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 20)(41, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Join Existing Room ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.createRoomForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.joinRoomForm);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName], encapsulation: 2 });


/***/ }),

/***/ 4472:
/*!*****************************************************************!*\
  !*** ./src/app/webrtc/pages/page-lobby/page-lobby.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLobbyComponent": () => (/* binding */ PageLobbyComponent)
/* harmony export */ });
/* harmony import */ var D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




const _c0 = ["mediaPreview"];
class PageLobbyComponent {
  constructor(router) {
    this.router = router;
    this.mediaTracks = {
      audio: true,
      video: true
    };
    this.session = null;
  }

  ngOnInit() {
    this.getMediaStream();
    let rawData = window.sessionStorage.getItem('session');

    if (rawData != null) {
      this.session = JSON.parse(rawData);
    }
  }

  getMediaStream() {
    var _this = this;

    return (0,D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.mediaStream = yield navigator.mediaDevices.getUserMedia(_this.mediaTracks);
      _this.mediaPreview.nativeElement.srcObject = _this.mediaStream;
    })();
  }

  toggleVideo() {
    var _this2 = this;

    return (0,D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.mediaTracks.video = !_this2.mediaTracks.video;
      yield _this2.mediaStream.getVideoTracks().forEach(track => {
        track.enabled = _this2.mediaTracks.video;
      });
    })();
  }

  toggleAudio() {
    var _this3 = this;

    return (0,D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.mediaTracks.audio = !_this3.mediaTracks.audio;
      yield _this3.mediaStream.getAudioTracks().forEach(track => {
        track.enabled = _this3.mediaTracks.audio;
      });
    })();
  }

  joinRoom() {
    window.sessionStorage.setItem('mediaParam', JSON.stringify(this.mediaTracks));
    this.mediaStream.getTracks().forEach(track => track.stop());
    this.router.navigateByUrl('/room');
  }

  exitSession() {
    this.mediaStream.getTracks().forEach(track => track.stop());
    this.router.navigateByUrl('/');
  }

  shareLink() {
    let room_url = `https://${window.location.host}/room/${this.session.roomname}`;
    navigator.clipboard.writeText(room_url);
  }

}

PageLobbyComponent.ɵfac = function PageLobbyComponent_Factory(t) {
  return new (t || PageLobbyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};

PageLobbyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PageLobbyComponent,
  selectors: [["app-page-lobby"]],
  viewQuery: function PageLobbyComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mediaPreview = _t.first);
    }
  },
  decls: 33,
  vars: 10,
  consts: [[1, "block", "min-h-screen", "w-full", "overflow-auto"], [1, "flex", "flex-row", "items-center", "py-4", "px-6", "bg-indigo-700", "shadow"], [1, "text-xl", "font-medium"], [1, "container", "p-6", "lg:p-24"], [1, "flex"], [1, "relative", "flex", "justify-center", "w-9/12"], ["src", "", 1, "border", "border-slate-600", "bg-slate-800", 3, "autoplay", "muted"], ["mediaPreview", ""], [1, "absolute", "left-1/2", "bottom-6", "-translate-x-1/2"], [1, "flex", "gap-4"], [3, "click"], [1, "sr-only"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6"], ["stroke-linecap", "round", "d", "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"], [1, "w-3/12"], [1, "flex", "flex-col", "gap-5"], [1, "w-full", "text-2xl", "font-medium"], ["role", "button", 1, "text-lg", "font-medium", "text-center", "px-3", "py-2", "rounded", "transition-all", "duration-300", "ease-in-out", "hover:ring", "ring-indigo-600", "bg-slate-800", "hover:bg-indigo-700", 3, "click"]],
  template: function PageLobbyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Conferencing");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "div", 3)(6, "div", 4)(7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "video", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageLobbyComponent_Template_button_click_12_listener() {
        return ctx.toggleVideo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Toggle Video");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "svg", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "path", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " 3 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageLobbyComponent_Template_button_click_18_listener() {
        return ctx.toggleAudio();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Toggle Audio");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "svg", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "path", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15)(24, "div", 16)(25, "h3", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageLobbyComponent_Template_a_click_27_listener() {
        return ctx.joinRoom();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Join Room");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageLobbyComponent_Template_a_click_29_listener() {
        return ctx.exitSession();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Exit Session");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageLobbyComponent_Template_a_click_31_listener() {
        return ctx.shareLink();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Share Link");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoplay", true)("muted", ctx.mediaTracks.audio);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("outline-none appearance-none focus:ring shadow rounded-full p-2 ", ctx.mediaTracks.video == true ? "bg-slate-600/50 ring-slate-400" : "bg-red-600 ring-red-400", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("outline-none appearance-none focus:ring shadow rounded-full p-2 ", ctx.mediaTracks.audio == true ? "bg-slate-600/50 ring-slate-400" : "bg-red-600 ring-red-400", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Connect to '", ctx.session == null ? null : ctx.session.roomname, "' as '", ctx.session == null ? null : ctx.session.username, "' ? ");
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 3458:
/*!***************************************************************!*\
  !*** ./src/app/webrtc/pages/page-room/page-room.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageRoomComponent": () => (/* binding */ PageRoomComponent)
/* harmony export */ });
/* harmony import */ var D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _services_signal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/signal.service */ 39);
/* harmony import */ var _services_peer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/peer.service */ 7820);
/* harmony import */ var _components_room_poll_room_poll_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/room-poll/room-poll.component */ 9083);








const _c0 = ["peerContainer"];

function PageRoomComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "video", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const stream_r3 = ctx.stream;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("srcObject", stream_r3)("autoplay", true)("muted", true);
  }
}

class PageRoomComponent {
  constructor(signal, peerService) {
    this.signal = signal;
    this.peerService = peerService;
    this.session = null;
    this.peers = new Map();
    this.localMedia = null;
    this.localStream = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
  }

  ngOnInit() {
    let sess = window.sessionStorage.getItem('session');

    if (sess != null) {
      this.session = JSON.parse(sess);
    }

    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
    }).then(media => {
      this.localMedia = media;
      this.localStream.next(this.localMedia);
      this.signal.getMessages().subscribe({
        next: msg => {
          this.handleSignals(msg);
        }
      });
      this.signal.getStateChanges().subscribe({
        next: state => {
          if (state == 'open') {
            this.signal.sendSignal(_services_signal_service__WEBPACK_IMPORTED_MODULE_1__.Signal.Announce, this.session);
          }
        }
      });
    });
  }

  handleSignals(msg) {
    var _this = this;

    return (0,D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (msg == null) {
        return;
      }

      switch (msg.type) {
        case _services_signal_service__WEBPACK_IMPORTED_MODULE_1__.Signal.Announce:
          console.info('Received announcement from', msg.data.username);

          _this.peers.set(msg.data.username, null);

          _this.sendConnectionOffer(msg.data);

          break;

        case _services_signal_service__WEBPACK_IMPORTED_MODULE_1__.Signal.Candidate:
          console.info('Received candidate change from', msg.data.username);

          _this.handleCandidateUpdate(msg.data);

          break;

        case _services_signal_service__WEBPACK_IMPORTED_MODULE_1__.Signal.Offer:
          console.info('Received offer from', msg.data.username);

          _this.sendConnectionAnswer(msg.data);

          break;

        case _services_signal_service__WEBPACK_IMPORTED_MODULE_1__.Signal.Answer:
          console.info('Received answer from', msg.data.username);

          _this.handlePostAnswer(msg.data);

          break;
        // case Signal.Acknowledge:
        //   console.info('Received acknowledgement', msg.data);
        //   if (msg.data.b != this.session.username) {
        //     return;
        //   }
        //   connection = this.peers.get(msg.data.a);
        //   console.info(connection);
        //   if (connection != null) {
        //     this.peerService.attachStreams(connection, this.localMedia);
        //   }
        //   break;
      }
    })();
  }

  sendConnectionOffer(target) {
    var _this2 = this;

    return (0,D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let connection = _this2.peerService.createConnection(_this2.session.username);

      _this2.peers.set(target.username, connection);

      console.info(_this2.peers);
      yield _this2.peerService.makeOffer(connection, _this2.session.username);
    })();
  }

  sendConnectionAnswer(target) {
    var _this3 = this;

    return (0,D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let connection = _this3.peers.get(target.username);

      if (connection == undefined) {
        connection = _this3.peerService.createConnection(_this3.session.username);

        _this3.peers.set(target.username, connection);

        console.warn('Connection not found for', target.username, _this3.peers);
      }

      yield _this3.peerService.attachStreams(connection, _this3.localMedia);
      yield _this3.peerService.sendAnswer(connection, target.desc, target.username);

      connection.ontrack = evt => {
        console.info('Got track from');
      };

      _this3.signal.sendSignal(_services_signal_service__WEBPACK_IMPORTED_MODULE_1__.Signal.Acknowledge, {
        a: _this3.session.username,
        b: target.username
      });
    })();
  }

  handlePostAnswer(target) {
    var _this4 = this;

    return (0,D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let connection = _this4.peers.get(target.username);

      if (connection == undefined) {
        return;
      }

      connection.ontrack = evt => {
        console.warn('Track Updated', evt);
      };
    })();
  }

  handleCandidateUpdate(target) {
    var _this5 = this;

    return (0,D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let connection = _this5.peers.get(target.username);

      if (connection == undefined) {
        console.warn('Connection not found for', target.username, _this5.peers);
        return;
      }

      console.log(target);
      yield _this5.peerService.updateCandidates(connection, target.candidate);
    })();
  }

}

PageRoomComponent.ɵfac = function PageRoomComponent_Factory(t) {
  return new (t || PageRoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_signal_service__WEBPACK_IMPORTED_MODULE_1__.SignalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_peer_service__WEBPACK_IMPORTED_MODULE_2__.PeerService));
};

PageRoomComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PageRoomComponent,
  selectors: [["app-page-room"]],
  viewQuery: function PageRoomComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewContainerRef);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.peerContainer = _t.first);
    }
  },
  decls: 7,
  vars: 2,
  consts: [[1, "absolute", "right-0", "bottom-0"], [1, "grid", "grid-cols-4", "grid-flow-row-dense", "gap-3"], ["peerContainer", ""], [3, "username", "roomname"], ["peerStream", ""], [1, "col-span-1", "w-full", "h-full"], [3, "srcObject", "autoplay", "muted"]],
  template: function PageRoomComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](2, null, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-room-poll", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, PageRoomComponent_ng_template_5_Template, 2, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("username", ctx.session.username)("roomname", ctx.session.roomname);
    }
  },
  dependencies: [_components_room_poll_room_poll_component__WEBPACK_IMPORTED_MODULE_3__.RoomPollComponent],
  encapsulation: 2
});

/***/ }),

/***/ 7820:
/*!*************************************************!*\
  !*** ./src/app/webrtc/services/peer.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeerService": () => (/* binding */ PeerService)
/* harmony export */ });
/* harmony import */ var D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _signal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signal.service */ 39);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class PeerService {
  constructor(signal) {
    this.signal = signal; // this.local = this.createConnection();
    // this.signal.getMessages().subscribe({
    //   next: this.handleSignals
    // });
  }

  setStream(stream) {
    this.stream = stream;
  }

  handleSignals(msgs) {// switch (msgs.type) {
    //   case Signal.Offer:
    //     this.sendAnswer(this.local, msgs.data);
    //     break;
    //   case Signal.Answer:
    //     this.attachStreams(this.local, this.stream);
    //     break;
    //   case Signal.Acknowledge:
    //     break;
    // }
  }

  createConnection(target) {
    let connection = new RTCPeerConnection();

    connection.onicecandidate = ev => {
      console.info('');
      this.signal.sendSignal(_signal_service__WEBPACK_IMPORTED_MODULE_1__.Signal.Candidate, {
        candidate: ev.candidate?.toJSON(),
        username: target
      });
    };

    connection.onconnectionstatechange = ev => {
      console.warn('Connection state changed to', connection.connectionState);
    };

    return connection;
  }

  makeOffer(connection = null, id = null) {
    var _this = this;

    return (0,D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (connection == null) {
        connection = _this.createConnection(id);
      }

      let description = yield connection.createOffer({
        offerToReceiveAudio: true,
        offerToReceiveVideo: true
      });
      yield connection.setLocalDescription(description);

      _this.signal.sendSignal(_signal_service__WEBPACK_IMPORTED_MODULE_1__.Signal.Offer, {
        desc: connection.localDescription?.toJSON(),
        username: id
      });
    })();
  }

  sendAnswer(connection, offer, id) {
    var _this2 = this;

    return (0,D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log(connection, offer, id)
      yield connection.setRemoteDescription(new RTCSessionDescription(offer));
      let answer = yield connection.createAnswer();
      yield connection.setLocalDescription(answer);

      _this2.signal.sendSignal(_signal_service__WEBPACK_IMPORTED_MODULE_1__.Signal.Answer, {
        desc: answer,
        username: id
      });
    })();
  }

  attachStreams(connection, stream) {
    return (0,D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (stream == null) {
        return;
      }

      stream.getTracks().forEach(track => {
        connection.addTrack(track);
      }); // console.log(connection);
      // if (connection.connectionState == 'connected') {
      //   stream.getTracks().forEach(track => connection.addTrack(track));
      // } else {
      //   connection.onconnectionstatechange = (ev: Event) => {
      //     // console.log(ev.currentTarget, connection.connectionState);
      //     if (connection.connectionState == 'connected') {
      //       stream.getTracks().forEach(
      //         track => connection.addTrack(track)
      //       );
      //     }
      //   }
      // }
    })();
  }

  updateCandidates(connection, candidate) {
    return (0,D_Workspace_Python_ZabaiTask_frontend_conferencing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (connection.remoteDescription == null) {
        console.log('Remote Description null');
        return;
      }

      if (candidate == null) {
        return;
      } // console.log('Adding candidate: ', connection, candidate);


      yield connection.addIceCandidate(new RTCIceCandidate(candidate));
    })();
  }

}

PeerService.ɵfac = function PeerService_Factory(t) {
  return new (t || PeerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_signal_service__WEBPACK_IMPORTED_MODULE_1__.SignalService));
};

PeerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: PeerService,
  factory: PeerService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 39:
/*!***************************************************!*\
  !*** ./src/app/webrtc/services/signal.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Signal": () => (/* binding */ Signal),
/* harmony export */   "SignalService": () => (/* binding */ SignalService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


var Signal;
(function (Signal) {
    Signal[Signal["Offer"] = 0] = "Offer";
    Signal[Signal["Answer"] = 1] = "Answer";
    Signal[Signal["Candidate"] = 2] = "Candidate";
    Signal[Signal["Acknowledge"] = 3] = "Acknowledge";
    Signal[Signal["Announce"] = 4] = "Announce";
    Signal[Signal["Leave"] = 5] = "Leave";
    Signal[Signal["Text"] = 6] = "Text";
    Signal[Signal["PollQuery"] = 7] = "PollQuery";
    Signal[Signal["PollOption"] = 8] = "PollOption";
    Signal[Signal["PollResponse"] = 9] = "PollResponse";
})(Signal || (Signal = {}));
class SignalService {
    constructor() {
        this.stateChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('inactive');
        this.messages = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.connect();
    }
    connect(host = '192.168.5.27:8081', room = 'common') {
        this.connection = new WebSocket(`ws://${host}/${room}/`);
        this.connection.onopen = (event) => { this.onConnectionStateChanged('open', event); };
        this.connection.onclose = (event) => { this.onConnectionStateChanged('close', event); };
        this.connection.onerror = (event) => { this.onConnectionStateChanged('error', event); };
        this.connection.onmessage = (event) => { this.onMessageReceived('message', event); };
    }
    getStateChanges() {
        return this.stateChange.asObservable();
    }
    getMessages() {
        return this.messages.asObservable();
    }
    sendSignal(type, data, recipient = null) {
        const signalData = {
            type: type,
            data: data
        };
        this.sendJson(signalData, recipient);
    }
    sendJson(data, recipient = null) {
        try {
            this.sendString(data, recipient);
        }
        catch (exception) {
            console.error(exception);
            throw exception;
        }
    }
    sendBinary(data, recipient = null) {
        try {
            this.connection.send(data);
        }
        catch (exception) {
            console.error(exception);
        }
    }
    sendString(data, recipient = null) {
        try {
            const stringdata = JSON.stringify({ payload: data, recipient: recipient });
            this.sendBinary(stringdata, recipient);
        }
        catch (exception) {
            console.error(exception);
        }
    }
    onMessageReceived(state, event) {
        this.messages.next(JSON.parse(event.data).payload);
    }
    onConnectionStateChanged(state, event) {
        this.stateChange.next(state);
    }
}
SignalService.ɵfac = function SignalService_Factory(t) { return new (t || SignalService)(); };
SignalService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SignalService, factory: SignalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1974:
/*!*************************************************!*\
  !*** ./src/app/webrtc/webrtc-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebrtcRoutingModule": () => (/* binding */ WebrtcRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_page_home_page_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/page-home/page-home.component */ 9385);
/* harmony import */ var _pages_page_lobby_page_lobby_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page-lobby/page-lobby.component */ 4472);
/* harmony import */ var _pages_page_room_page_room_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-room/page-room.component */ 3458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    { path: '', component: _pages_page_home_page_home_component__WEBPACK_IMPORTED_MODULE_0__.PageHomeComponent },
    { path: 'lobby', component: _pages_page_lobby_page_lobby_component__WEBPACK_IMPORTED_MODULE_1__.PageLobbyComponent },
    { path: 'room', component: _pages_page_room_page_room_component__WEBPACK_IMPORTED_MODULE_2__.PageRoomComponent }
];
class WebrtcRoutingModule {
}
WebrtcRoutingModule.ɵfac = function WebrtcRoutingModule_Factory(t) { return new (t || WebrtcRoutingModule)(); };
WebrtcRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: WebrtcRoutingModule });
WebrtcRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](WebrtcRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 7786:
/*!*****************************************!*\
  !*** ./src/app/webrtc/webrtc.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebrtcModule": () => (/* binding */ WebrtcModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _pages_page_home_page_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/page-home/page-home.component */ 9385);
/* harmony import */ var _pages_page_lobby_page_lobby_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page-lobby/page-lobby.component */ 4472);
/* harmony import */ var _pages_page_room_page_room_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-room/page-room.component */ 3458);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _webrtc_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webrtc-routing.module */ 1974);
/* harmony import */ var _components_self_video_self_video_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/self-video/self-video.component */ 3398);
/* harmony import */ var _components_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/chat-box/chat-box.component */ 1268);
/* harmony import */ var _components_room_poll_room_poll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/room-poll/room-poll.component */ 9083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);











class WebrtcModule {
}
WebrtcModule.ɵfac = function WebrtcModule_Factory(t) { return new (t || WebrtcModule)(); };
WebrtcModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: WebrtcModule });
WebrtcModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _webrtc_routing_module__WEBPACK_IMPORTED_MODULE_3__.WebrtcRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](WebrtcModule, { declarations: [_pages_page_home_page_home_component__WEBPACK_IMPORTED_MODULE_0__.PageHomeComponent,
        _pages_page_lobby_page_lobby_component__WEBPACK_IMPORTED_MODULE_1__.PageLobbyComponent,
        _pages_page_room_page_room_component__WEBPACK_IMPORTED_MODULE_2__.PageRoomComponent,
        _components_self_video_self_video_component__WEBPACK_IMPORTED_MODULE_4__.SelfVideoComponent,
        _components_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_5__.ChatBoxComponent,
        _components_room_poll_room_poll_component__WEBPACK_IMPORTED_MODULE_6__.RoomPollComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _webrtc_routing_module__WEBPACK_IMPORTED_MODULE_3__.WebrtcRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map