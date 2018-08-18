<% include ../partials/header %>

  <% include ../partials/errorMsg %>
  <div class="container mt-4">    
    <div class="row">
      <div class="col-12 col-md-6 col-lg-3">
        <div id="profilePicture" class="card shadow-sm d-none d-md-block">
          <% if(user.image.length < 1) { %>
            <img class="card-img-top" src="https://basinred.com/wp-content/uploads/2016/09/default-user-img.jpg">
          <% } else { %>
            <img class="card-img-top" src="<%= user.image %>">
          <% } %>  
            <div class="card-body">
                <h5 class="card-title text-capitalize"><%= user.fullName %></h5>
                <h6 class="card-subtitle text-muted">                
                  <% if (campgrounds.length === 1) { %>
                    <%= campgrounds.length %> Campground
                  <% } else { %>
                    <%= campgrounds.length %> Campgrounds
                  <% } %> 
                  <div><%= reviews.length %> Reviews</div>
                </h6> 
            </div>        
        </div>
        <div class="d-block d-sm-none d-none d-sm-block d-md-none mx-auto">
          <div class="row">
            <div class="col-4 text-center">
              <% if(user.image.length < 1) { %>
                <img class="rounded shadow-sm" src="https://basinred.com/wp-content/uploads/2016/09/default-user-img.jpg" style="width: 110px; height: 110px;">
              <% } else { %>
                <img class="rounded shadow-sm" src="<%= user.image %>" style="width: 110px; height: 110px;">
              <% } %>
            </div>
            <div class="col-8">
              <div id="profilePicture" class="card shadow-sm" >                  
                <div class="card-body">
                  <h5 class="card-title text-capitalize"><%= user.fullName %></h5>
                  <h6 class="card-subtitle text-muted">                    
                    <% if (campgrounds.length === 1) { %>
                      <%= campgrounds.length %> Campground
                    <% } else { %>
                      <%= campgrounds.length %> Campgrounds
                    <% } %>
                    <div>
                      <% if (reviews.length === 1) { %>
                        <%= reviews.length %> Review
                      <% } else { %>
                        <%= reviews.length %> Reviews
                      <% } %> 
                    </div>
                  </h6> 
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div class="card shadow-sm mt-3 mb-3">
          <div class="card-header text-capitalize">
            <% if (currentUser && user._id.equals(currentUser._id)) { %>
              Your Profile
            <% } else { %>
              <%= user.fullName %>'s Profile
            <% } %>            
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <i class="fas fa-envelope"></i> <strong>Email: </strong><a href="mailto:<%= user.email %> "><%= user.email %></a>             
              </li>
              <% if(!user.phone) { %>
              <% } else { %>
                <li class="list-group-item">
                  <i class="fas fa-phone"></i> <strong>Phone: </strong><span class="text-muted"><%= user.phone %>    </span>          
                </li>
              <% } %>              
              <li class="list-group-item">
                <i class="far fa-calendar-alt"></i> <strong>Joined: </strong><span class="text-muted"><%= moment(user.joined).format('LL') %> </span>             
              </li>              
              <% if (currentUser && user._id.equals(currentUser._id)) { %>
                <li class="list-group-item d-flex justify-content-center">
                  <a class="btn btn-warning btn-sm float-left mr-1" href="/users/<%= user._id %>/edit">Edit Profile</a>
                  <form class="float-left" action="/users/<%= user._id %>?_method=DELETE" method="POST">
                    <button type="submit" class="btn btn-danger btn-sm">Delete Account</button>
                  </form>
                </li>
              <% } %>             
          </ul>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-9">
        <div class="container text-center"><h1>Campgrounds</h1></div>             
        <div class="row">          
          <% campgrounds.forEach(function(campground) { %>
            <div class="col-12 col-lg-6">
              <div class="card shadow-sm mt-3">
                <a href="/campgrounds/<%= campground._id %>"><img id="campgroundCard" class="card-img-top" src="<%= campground.image %>"></a> 
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="/campgrounds/<%= campground._id %>" class="text-capitalize"><%= campground.name %></a>
                    <% if (campground.price > 100) { %>
                      <small class="float-right text-muted">$$$</small>
                    <% } else if (campgrounds.price > 50) { %>
                      <small class="float-right text-muted">$$</small>
                    <% } else { %>
                      <small class="float-right text-muted">$</small>
                    <% } %>
                                      
                  </h5>              
                  <h6 class="card-subtitle">
                    <% if(!campground.comments.length) { %>
                      <span class="text-muted">No Reviews</span>
                    <% } else { %>
                      <% var stars = ['<i class="far fa-star text-danger"></i>', '<i class="far fa-star text-danger"></i>', '<i class="far fa-star text-danger"></i>', '<i class="far fa-star text-danger"></i>', '<i class="far fa-star text-danger"></i>'] %>
                      <% for(var i = 0; i < Math.round(campground.rateAvg); i++) { %>
                          <% stars[i] = '<i class="fas fa-star text-danger"></i>' %>
                      <% } %> 
                      <% for(var i = 0; i < stars.length; i++) { %>
                        <%- stars[i] %>
                      <% } %>
                      <% if (campground.comments.length === 1) { %>
                        <span class="text-muted"><%= campground.comments.length %> Review</span> 
                      <% } else { %>
                        <span class="text-muted"><%= campground.comments.length %> Reviews</span> 
                      <% } %>                
                    <% } %>   
                  </h6> 
                </div>
              </div>
            </div>
          <% }) %>
        </div>        
      </div>
    </div>
  </div>

  <% include ../partials/footer %>