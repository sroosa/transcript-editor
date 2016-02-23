window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["account.ejs"] = '<% if (user.signedIn) { %>  <div class="select">    <div class="select-active" title="Signed in as <%= user.name %>"><%= user.name %></div>    <div class="select-options account-menu menu">      <a href="#sign-out" class="sign-out-link select-option menu-item">Sign out</a>    </div>  </div><% } else { %>  <div class="select">    <div class="select-active">Sign in with</div>    <div class="select-options account-menu menu">      <% _.each(project.authProviders, function(provider) { %>        <a href="#sign-in-with-<%= provider.name %>" data-provider="<%= provider.name %>" class="auth-link select-option menu-item" data-active="Signing In..."><%= provider.label %></a>      <% }) %>    </div>  </div><% } %>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["crumbs.ejs"] = '<% _.each(crumbs, function(crumb){ %>  <% if (crumb.url) { %>    <a href="<%= crumb.url %>" class="crumb">  <% } else { %>    <div class="crumb">  <% } %>    <% if (crumb.image) { %>      <div class="crumb-image"><img src="<%= crumb.image %>" alt="<%= crumb.label %> Icon" /></div>    <% } %>    <div class="crumb-label"><%= crumb.label %></div>  <% if (crumb.url) { %>    </a>  <% } else { %>    </div>  <% } %><% }) %>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["menu.ejs"] = '<div class="<%= menu_key %>-menu menu">  <% _.each(menu, function(item) { %>    <% if (!item.validRoutes || item.validRoutes.indexOf(route.route) > -1) { %>      <% if (item.modal) { %>        <a data-modal="<%= item.modal %>" class="menu-item modal-invoke"><%= item.label %></a>      <% } else { %>        <a href="<%= item.url %>" class="menu-item <%= item.url==route.path ? \'active\': \'\' %>"><%= item.label %></a>      <% } %>    <% } %>  <% }) %></div>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["modal.ejs"] = '<section class="modal <%= active ? \'active\': \'\' %>" tabindex="-1" role="dialog" aria-labelledby="modal-label" aria-hidden="true">  <div class="modal-inner">    <% if (hasOwnProperty("title")) { %>      <header id="modal-label"><%= title %></header>    <% } %>    <div class="modal-content">      <% _.each(pages, function(page, i){ %>        <div class="modal-page <%= page.file ? page.file : \'\' %> <%= active_page==i ? \'active\': \'\' %>">          <%= page.contents %>        </div>      <% }) %>    </div>    <% if (pages.length > 1) { %>      <div class="modal-tabs">        <% _.each(pages, function(page, i){ %>          <a class="modal-tab <%= active_page==i ? \'active\': \'\' %>" data-tab="<%= i %>"><%= i+1 %>. <%= page.label %></a>        <% }) %>      </div>    <% } %>    <footer>      <% if (active_page > 0) { %>        <a class="button modal-tab" data-tab="<%= active_page-1 %>">Previous</a>      <% } %>      <% if (active_page >= pages.length-1) { %>        <a class="button pull-right modal-dismiss"><%= hasOwnProperty("doneLabel") ? doneLabel : "Finished" %></a>      <% } else if (pages.length > 1) { %>        <a class="button pull-right modal-tab" data-tab="<%= active_page+1 %>">Next</a>      <% } %>    </footer>  </div>  <a class="modal-close modal-dismiss" title="Close this modal">x</a></section>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["page.ejs"] = '<div class="<%= page_key %> page">  <%= content %></div>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["header_title.ejs"] = '<% if (project.logo) { %>  <a href="/" title="<%= project.name %>" class="title" aria-label="Click to return to homepage" title="Click to return to homepage"><img src="<%= project.logo %>" alt="Logo" class="logo" /></a><% } else { %>  <h1 class="title" aria-label="Click to return to homepage" title="Click to return to homepage">><a href="/"><%= project.name %></a></h1><% } %>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_edit.ejs"] = '<% if (page_content) { %><div class="transcript-page">  <%= page_content %></div><% } %><div class="transcript-lines">  <% _.each(transcript.lines, function(line) { %>    <%= template_line(line) %>  <% }) %></div>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_item.ejs"] = '<a href="#<%= path %>" class="transcript-item" title="<%= title %> <%= description %>">  <div class="item-image" style="background-image: url(<%= image_url %>)"></div>  <div class="item-title"><%= title %></div>  <% if (description) { %>    <div class="item-description"><%= description %></div>  <% } %>  <div class="item-info"><%= UTIL.formatTime(duration) %></div></a>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_line.ejs"] = '<div sequence="<%= sequence %>" class="line <%= status.name %> <%= is_editable ? \'\' : \'not-editable\' %> <%= user_text ? \'user-edited\' : \'\' %>">  <div class="time"><%= UTIL.formatTimeMs(start_time) %></div>  <div class="status <%= status.name %>">    <div class="status-description" data-description="<%= status.description %>"></div>  </div>  <div class="text">    <% if (is_editable) { %>      <input type="text" value="<%= display_text %>" user-value="<%= user_text %>"  />    <% } else { %>      <div><%= display_text %></div>    <% } %>  </div></div>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_list.ejs"] = '<div class="transcript-list">  <% _.each(transcripts, function(transcript) { %>    <%= template_item(transcript) %>  <% }) %></div><% if (has_more) { %><a href="#more" class="list-next button">Load More</a><% } %>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_toolbar.ejs"] = '<div class="transcript-toolbar">  <div class="mode">    <label>Continous Play</label>    <div class="onoffswitch">      <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="continuous-play-switch">      <label class="onoffswitch-label" for="continuous-play-switch">        <span class="onoffswitch-inner"></span>        <span class="onoffswitch-switch"></span>      </label>    </div>  </div>  <div id="transcript-notifications" class="notifications">Loading transcript...</div>  <div class="controls">    <% _.each(controls, function(control){ %>      <div class="control <%= control.id %>" aria-label="<%= control.keyDescription %>" title="<%= control.keyDescription %>">        <div class="key"><%= control.key %></div>        <div class="label"><%= control.label %></div>      </div>    <% }) %>  </div>  <div class="transcript-menu"><%= menu %></div></div>';