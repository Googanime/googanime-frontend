export default Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","series-panel");
      dom.setAttribute(el1,"class","col-md-2");
      dom.setAttribute(el1,"style","padding-right: 30px;");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("img");
      dom.setAttribute(el3,"id","serie-poster");
      dom.setAttribute(el3,"style","background-size:cover;height: 100%;width: 100%;max-height: 400px;max-width: 100%");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"id","serie-info");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h4");
      dom.setAttribute(el4,"style","text-align: left;padding-bottom:5px;border-bottom: 1px solid black");
      var el5 = dom.createTextNode("\n                Titles\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"id","serie-titles");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"id","serie-title-romaji-left");
      var el6 = dom.createTextNode("Romaji: ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"id","serie-title-japanese-left");
      var el6 = dom.createTextNode("Japanese: ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h4");
      dom.setAttribute(el4,"id","serie-information");
      dom.setAttribute(el4,"style","text-align: left;padding-bottom:5px;border-bottom: 1px solid black");
      var el5 = dom.createTextNode("\n                Information\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"id","serie-metadata");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"id","serie-started-airing-date-left");
      var el6 = dom.createTextNode("Aired: ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"id","serie-finished-airing-date-left");
      var el6 = dom.createTextNode("To: ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"id","serie-youtube-video-id-left");
      var el6 = dom.createTextNode("Trailer: http://youtube.com/");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"id","serie-age-rating-left");
      var el6 = dom.createTextNode("Rating: ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"id","serie-episode-count-left");
      var el6 = dom.createTextNode("Episodes: ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"id","serie-episode-length-left");
      var el6 = dom.createTextNode("Duration: ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"id","serie-show-type-left");
      var el6 = dom.createTextNode("Type: ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
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
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(element0, [1, 1]);
      var element2 = dom.childAt(element0, [3, 1]);
      var element3 = dom.childAt(element2, [3]);
      var element4 = dom.childAt(element2, [7]);
      var attrMorph0 = dom.createAttrMorph(element1, 'src');
      var morph0 = dom.createMorphAt(dom.childAt(element3, [1]),1,1);
      var morph1 = dom.createMorphAt(dom.childAt(element3, [3]),1,1);
      var morph2 = dom.createMorphAt(dom.childAt(element4, [1]),1,1);
      var morph3 = dom.createMorphAt(dom.childAt(element4, [3]),1,1);
      var morph4 = dom.createMorphAt(dom.childAt(element4, [5]),1,1);
      var morph5 = dom.createMorphAt(dom.childAt(element4, [7]),1,1);
      var morph6 = dom.createMorphAt(dom.childAt(element4, [9]),1,1);
      var morph7 = dom.createMorphAt(dom.childAt(element4, [11]),1,1);
      var morph8 = dom.createMorphAt(dom.childAt(element4, [13]),1,1);
      attribute(env, attrMorph0, element1, "src", concat(env, [get(env, context, "animeSelected.posterImage")]));
      content(env, morph0, context, "animeSelected.romajiTitle");
      content(env, morph1, context, "animeSelected.japaneseTitle");
      content(env, morph2, context, "animeSelected.startedAiringDate");
      content(env, morph3, context, "animeSelected.finishedAiringDate");
      content(env, morph4, context, "animeSelected.youtubeVideoId");
      content(env, morph5, context, "animeSelected.ageRating");
      content(env, morph6, context, "animeSelected.episodeCount");
      content(env, morph7, context, "animeSelected.episodeLength");
      content(env, morph8, context, "animeSelected.showType");
      return fragment;
    }
  };
}()));