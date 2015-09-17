export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.1",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","alert alert-danger");
          dom.setAttribute(el1,"role","alert");
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","glyphicon glyphicon-exclamation-sign");
          dom.setAttribute(el2,"aria-hidden","true");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","sr-only");
          var el3 = dom.createTextNode("Error:");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),5,5);
          content(env, morph0, context, "controller.error");
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.1",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.1",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","row");
              dom.setAttribute(el1,"style","border-bottom: 1px solid #ddd;padding: 15px;");
              var el2 = dom.createTextNode("\n                  ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2,"class","col-md-1 vertical-center-anime");
              var el3 = dom.createTextNode("\n                      ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("img");
              dom.setAttribute(el3,"style","max-width: 100%;");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n                  ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                  ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2,"class","col-md-9");
              dom.setAttribute(el2,"style","text-align: justify;margin: 0;padding: 0");
              var el3 = dom.createTextNode("\n                      ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("h4");
              dom.setAttribute(el3,"class","media-heading");
              var el4 = dom.createComment("");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("small");
              var el5 = dom.createElement("i");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n                      ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("div");
              dom.setAttribute(el3,"class","vertical-center-anime col-center-block");
              var el4 = dom.createComment("");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n                  ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                  ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2,"class","col-md-1 vertical-center-anime centering");
              var el3 = dom.createTextNode("\n                    ");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n                  ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                  ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2,"class","col-md-1 vertical-center-anime centering");
              var el3 = dom.createTextNode("\n                    ");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n                  ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n              ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, content = hooks.content;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var element9 = dom.childAt(fragment, [1]);
              var element10 = dom.childAt(element9, [1, 1]);
              var element11 = dom.childAt(element9, [3]);
              var attrMorph0 = dom.createAttrMorph(element10, 'src');
              var morph0 = dom.createMorphAt(dom.childAt(element11, [1]),0,0);
              var morph1 = dom.createMorphAt(dom.childAt(element11, [3]),0,0);
              var morph2 = dom.createMorphAt(dom.childAt(element9, [5]),1,1);
              var morph3 = dom.createMorphAt(dom.childAt(element9, [7]),1,1);
              attribute(env, attrMorph0, element10, "src", concat(env, [get(env, context, "anime.posterImage")]));
              content(env, morph0, context, "anime.titles.romaji");
              content(env, morph1, context, "anime.synopsis");
              content(env, morph2, context, "anime.showType");
              content(env, morph3, context, "anime.episodeCount");
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.1",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, null);
            dom.insertBoundary(fragment, 0);
            block(env, morph0, context, "each", [get(env, context, "model")], {"keyword": "anime"}, child0, null);
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.1",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                      ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n                        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","col-md-1");
              dom.setAttribute(el1,"style","margin: 0;padding: 0");
              var el2 = dom.createTextNode("\n                            ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("a");
              dom.setAttribute(el2,"href","#");
              dom.setAttribute(el2,"class","thumbnail");
              dom.setAttribute(el2,"style","margin: 0;padding: 0;");
              var el3 = dom.createTextNode("\n                                ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("img");
              dom.setAttribute(el3,"class","serie-poster-image");
              dom.setAttribute(el3,"style","background-size:cover;height: 200px;");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n                                ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("div");
              dom.setAttribute(el3,"class","serie-hidden");
              dom.setAttribute(el3,"style","display: none");
              var el4 = dom.createTextNode("\n                                    ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("div");
              dom.setAttribute(el4,"class","serie-title-canonical");
              var el5 = dom.createComment("");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                                    ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("div");
              dom.setAttribute(el4,"class","serie-title-romaji");
              var el5 = dom.createComment("");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                                    ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("div");
              dom.setAttribute(el4,"class","serie-title-english");
              var el5 = dom.createComment("");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                                    ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("div");
              dom.setAttribute(el4,"class","serie-title-japanese");
              var el5 = dom.createComment("");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                                    ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("div");
              dom.setAttribute(el4,"class","serie-started-airing-date");
              var el5 = dom.createComment("");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                                    ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("div");
              dom.setAttribute(el4,"class","serie-finished-airing-date");
              var el5 = dom.createComment("");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                                    ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("div");
              dom.setAttribute(el4,"class","serie-youtube-video-id");
              var el5 = dom.createComment("");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                                    ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("div");
              dom.setAttribute(el4,"class","serie-age-rating");
              var el5 = dom.createComment("");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                                    ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("div");
              dom.setAttribute(el4,"class","serie-episode-count");
              var el5 = dom.createComment("");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                                    ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("div");
              dom.setAttribute(el4,"class","serie-episode-length");
              var el5 = dom.createComment("");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                                    ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("div");
              dom.setAttribute(el4,"class","serie-show-type");
              var el5 = dom.createComment("");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                                    ");
              dom.appendChild(el3, el4);
              var el4 = dom.createComment("<div class=\"serie-genres\">{{anime.genres}}</div>");
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                                ");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n                            ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                        ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, content = hooks.content, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, element = hooks.element;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var element0 = dom.childAt(fragment, [3, 1]);
              var element1 = dom.childAt(element0, [1]);
              var element2 = dom.childAt(element0, [3]);
              var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
              var attrMorph0 = dom.createAttrMorph(element1, 'src');
              var morph1 = dom.createMorphAt(dom.childAt(element2, [1]),0,0);
              var morph2 = dom.createMorphAt(dom.childAt(element2, [3]),0,0);
              var morph3 = dom.createMorphAt(dom.childAt(element2, [5]),0,0);
              var morph4 = dom.createMorphAt(dom.childAt(element2, [7]),0,0);
              var morph5 = dom.createMorphAt(dom.childAt(element2, [9]),0,0);
              var morph6 = dom.createMorphAt(dom.childAt(element2, [11]),0,0);
              var morph7 = dom.createMorphAt(dom.childAt(element2, [13]),0,0);
              var morph8 = dom.createMorphAt(dom.childAt(element2, [15]),0,0);
              var morph9 = dom.createMorphAt(dom.childAt(element2, [17]),0,0);
              var morph10 = dom.createMorphAt(dom.childAt(element2, [19]),0,0);
              var morph11 = dom.createMorphAt(dom.childAt(element2, [21]),0,0);
              content(env, morph0, context, "model.titles.canonical");
              attribute(env, attrMorph0, element1, "src", concat(env, [get(env, context, "anime.posterImage")]));
              element(env, element1, context, "action", ["updateSeriePanel", get(env, context, "anime")], {"on": "mouseEnter"});
              content(env, morph1, context, "anime.canonicalTitle");
              content(env, morph2, context, "anime.romajiTitle");
              content(env, morph3, context, "anime.englishTitle");
              content(env, morph4, context, "anime.japaneseTitle");
              content(env, morph5, context, "anime.startedAiringDate");
              content(env, morph6, context, "anime.finishedAiringDate");
              content(env, morph7, context, "anime.youtubeVideoId");
              content(env, morph8, context, "anime.ageRating");
              content(env, morph9, context, "anime.episodeCount");
              content(env, morph10, context, "anime.episodeLength");
              content(env, morph11, context, "anime.showType");
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.1",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","container-fluid");
            dom.setAttribute(el1,"style","margin-left: 20px; margin-right: 20px");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","row");
            var el3 = dom.createTextNode("\n                  ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3,"id","series-panel");
            dom.setAttribute(el3,"class","col-md-2");
            dom.setAttribute(el3,"style","padding-right: 30px;");
            var el4 = dom.createTextNode("\n                          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4,"class","row");
            var el5 = dom.createTextNode("\n                              ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("img");
            dom.setAttribute(el5,"id","serie-poster");
            dom.setAttribute(el5,"style","background-size:cover;height: 100%;width: 100%;max-height: 400px;max-width: 100%");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n                          ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4,"class","row");
            var el5 = dom.createTextNode("\n                              ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("div");
            dom.setAttribute(el5,"id","serie-info");
            var el6 = dom.createTextNode("\n                                  ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("h4");
            dom.setAttribute(el6,"style","text-align: left;padding-bottom:5px;border-bottom: 1px solid black");
            var el7 = dom.createTextNode("\n                                      Titles\n                                  ");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode("\n                                  ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("div");
            dom.setAttribute(el6,"id","serie-titles");
            var el7 = dom.createTextNode("\n                                      ");
            dom.appendChild(el6, el7);
            var el7 = dom.createElement("div");
            dom.setAttribute(el7,"id","serie-title-romaji-left");
            var el8 = dom.createTextNode("Romaji: ");
            dom.appendChild(el7, el8);
            var el8 = dom.createComment("");
            dom.appendChild(el7, el8);
            dom.appendChild(el6, el7);
            var el7 = dom.createTextNode("\n                                      ");
            dom.appendChild(el6, el7);
            var el7 = dom.createElement("div");
            dom.setAttribute(el7,"id","serie-title-japanese-left");
            var el8 = dom.createTextNode("Japanese: ");
            dom.appendChild(el7, el8);
            var el8 = dom.createComment("");
            dom.appendChild(el7, el8);
            dom.appendChild(el6, el7);
            var el7 = dom.createTextNode("\n                                  ");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode("\n                                  ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("h4");
            dom.setAttribute(el6,"id","serie-information");
            dom.setAttribute(el6,"style","text-align: left;padding-bottom:5px;border-bottom: 1px solid black");
            var el7 = dom.createTextNode("\n                                      Information\n                                  ");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode("\n                                  ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("div");
            dom.setAttribute(el6,"id","serie-metadata");
            var el7 = dom.createTextNode("\n                                      ");
            dom.appendChild(el6, el7);
            var el7 = dom.createElement("div");
            dom.setAttribute(el7,"id","serie-started-airing-date-left");
            var el8 = dom.createTextNode("Aired: ");
            dom.appendChild(el7, el8);
            var el8 = dom.createComment("");
            dom.appendChild(el7, el8);
            dom.appendChild(el6, el7);
            var el7 = dom.createTextNode("\n                                      ");
            dom.appendChild(el6, el7);
            var el7 = dom.createElement("div");
            dom.setAttribute(el7,"id","serie-finished-airing-date-left");
            var el8 = dom.createTextNode("To: ");
            dom.appendChild(el7, el8);
            var el8 = dom.createComment("");
            dom.appendChild(el7, el8);
            dom.appendChild(el6, el7);
            var el7 = dom.createTextNode("\n                                      ");
            dom.appendChild(el6, el7);
            var el7 = dom.createElement("div");
            dom.setAttribute(el7,"id","serie-youtube-video-id-left");
            var el8 = dom.createTextNode("Trailer: http://youtube.com/");
            dom.appendChild(el7, el8);
            var el8 = dom.createComment("");
            dom.appendChild(el7, el8);
            dom.appendChild(el6, el7);
            var el7 = dom.createTextNode("\n                                      ");
            dom.appendChild(el6, el7);
            var el7 = dom.createElement("div");
            dom.setAttribute(el7,"id","serie-age-rating-left");
            var el8 = dom.createTextNode("Rating: ");
            dom.appendChild(el7, el8);
            var el8 = dom.createComment("");
            dom.appendChild(el7, el8);
            dom.appendChild(el6, el7);
            var el7 = dom.createTextNode("\n                                      ");
            dom.appendChild(el6, el7);
            var el7 = dom.createElement("div");
            dom.setAttribute(el7,"id","serie-episode-count-left");
            var el8 = dom.createTextNode("Episodes: ");
            dom.appendChild(el7, el8);
            var el8 = dom.createComment("");
            dom.appendChild(el7, el8);
            dom.appendChild(el6, el7);
            var el7 = dom.createTextNode("\n                                      ");
            dom.appendChild(el6, el7);
            var el7 = dom.createElement("div");
            dom.setAttribute(el7,"id","serie-episode-length-left");
            var el8 = dom.createTextNode("Duration: ");
            dom.appendChild(el7, el8);
            var el8 = dom.createComment("");
            dom.appendChild(el7, el8);
            dom.appendChild(el6, el7);
            var el7 = dom.createTextNode("\n                                      ");
            dom.appendChild(el6, el7);
            var el7 = dom.createElement("div");
            dom.setAttribute(el7,"id","serie-show-type-left");
            var el8 = dom.createTextNode("Type: ");
            dom.appendChild(el7, el8);
            var el8 = dom.createComment("");
            dom.appendChild(el7, el8);
            dom.appendChild(el6, el7);
            var el7 = dom.createTextNode("\n                                  ");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode("\n                              ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n                          ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                  ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                  ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3,"class","center-block");
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("                  ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                  ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, content = hooks.content, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element3 = dom.childAt(fragment, [1, 1]);
            var element4 = dom.childAt(element3, [1]);
            var element5 = dom.childAt(element4, [1, 1]);
            var element6 = dom.childAt(element4, [3, 1]);
            var element7 = dom.childAt(element6, [3]);
            var element8 = dom.childAt(element6, [7]);
            var attrMorph0 = dom.createAttrMorph(element5, 'src');
            var morph0 = dom.createMorphAt(dom.childAt(element7, [1]),1,1);
            var morph1 = dom.createMorphAt(dom.childAt(element7, [3]),1,1);
            var morph2 = dom.createMorphAt(dom.childAt(element8, [1]),1,1);
            var morph3 = dom.createMorphAt(dom.childAt(element8, [3]),1,1);
            var morph4 = dom.createMorphAt(dom.childAt(element8, [5]),1,1);
            var morph5 = dom.createMorphAt(dom.childAt(element8, [7]),1,1);
            var morph6 = dom.createMorphAt(dom.childAt(element8, [9]),1,1);
            var morph7 = dom.createMorphAt(dom.childAt(element8, [11]),1,1);
            var morph8 = dom.createMorphAt(dom.childAt(element8, [13]),1,1);
            var morph9 = dom.createMorphAt(dom.childAt(element3, [3]),1,1);
            attribute(env, attrMorph0, element5, "src", concat(env, [get(env, context, "animeSelected.posterImage")]));
            content(env, morph0, context, "animeSelected.romajiTitle");
            content(env, morph1, context, "animeSelected.japaneseTitle");
            content(env, morph2, context, "animeSelected.startedAiringDate");
            content(env, morph3, context, "animeSelected.finishedAiringDate");
            content(env, morph4, context, "animeSelected.youtubeVideoId");
            content(env, morph5, context, "animeSelected.ageRating");
            content(env, morph6, context, "animeSelected.episodeCount");
            content(env, morph7, context, "animeSelected.episodeLength");
            content(env, morph8, context, "animeSelected.showType");
            block(env, morph9, context, "each", [get(env, context, "model")], {"keyword": "anime"}, child0, null);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.1",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, null);
          dom.insertBoundary(fragment, 0);
          block(env, morph0, context, "if", [get(env, context, "layoutList")], {}, child0, child1);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container-fluid container-search-result");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element12 = dom.childAt(fragment, [5]);
        var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
        var morph1 = dom.createMorphAt(fragment,3,3,contextualElement);
        var morph2 = dom.createMorphAt(element12,1,1);
        var morph3 = dom.createMorphAt(element12,2,2);
        inline(env, morph0, context, "partial", ["partials/navbar_search"], {});
        inline(env, morph1, context, "partial", ["partials/filter"], {});
        block(env, morph2, context, "if", [get(env, context, "controller.error")], {}, child0, null);
        block(env, morph3, context, "unless", [get(env, context, "model")], {}, child1, child2);
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("   ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
        inline(env, morph0, context, "partial", ["partials/home_search"], {});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("script");
      dom.setAttribute(el1,"type","text/javascript");
      var el2 = dom.createTextNode("\n\n    //Default tab selector\n    var type = \"Anime\";\n\n    $('#search').keypress(function(e){\n        if(e.which == 13){\n            var url = \"search?query=\" + $('#search').val() + \"&type=\" + type.toLowerCase();\n            window.location.replace(url);\n        }\n    });\n\n    //prevent redirection\n    $('ul.search-type li a').on('click', function(e) {\n        e.preventDefault();\n    });\n\n    $(document).ready(function()\n    {\n\n        $(\".default\").css(\"border-top\", \"1px solid #3B6F96\");\n        $(\".default\").css(\"box-shadow\", \"inset 0 1.5px #3B6F96\");\n        $(\".default\").css(\"border-bottom\", \"none\");\n\n        $('ul.search-type li').click(function(e)\n        {\n            var clickEl = $('ul.search-type li a');\n\n            //deselect\n            clickEl.each(function(){\n                $(this).css(\"box-shadow\", \"none\");\n                $(this).css(\"z-index\", \"none\");\n                $(this).css(\"border\", \"1px solid #ddd\");\n                $(this).css(\"border-bottom\", \"none\");\n\n            });\n            //select\n            $(this).find(\"a\").css(\"border-top\", \"1px solid #3B6F96\");\n            $(this).find(\"a\").css(\"box-shadow\", \"inset 0 1.5px #3B6F96\");\n            $(this).find(\"a\").css(\"border-bottom\", \"none\");\n\n            type = $(this).find(\"a\").text();\n        });\n    });\n\n    $('.subnav').affix({\n        offset: {\n            top: $('#navtop').height()\n        }\n    });\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var morph0 = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, null);
      block(env, morph0, context, "if", [get(env, context, "search")], {}, child0, child1);
      return fragment;
    }
  };
}()));