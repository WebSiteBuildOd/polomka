<div class="submenu-hide [[+idx:is=`1`:then=`active`]]" data-id="[[+id]]">
    <div class="col-menu-services col-menu">
        <div class="caption">Услуги по ремонту</div>
        <div class="list">
            [[pdoResources?
                &parents=`[[+id]]`
                &limit=`0`
                &depth=`2`
                &tpl=`@FILE includes/tpls/tpl.menuSlideItemServices.tpl`
                &includeTVs=`icon-main-file`
                &sortby=`{ "menuindex" : "ASC" }`
                &where=`{ "template" : "5" }`
            ]]
        </div>
    </div>
    <div class="col-menu-services col-menu">
        <div class="caption">Поломки</div>
        <div class="list">
            [[pdoResources?
                &parents=`[[+id]]`
                &limit=`0`
                &depth=`2`
                &tpl=`@FILE includes/tpls/tpl.menuSlideItemServices.tpl`
                &includeTVs=`icon-main-file`
                &sortby=`{ "menuindex" : "ASC" }`
                &where=`{ "template" : "6" }`
            ]]
        </div>
    </div>
</div>