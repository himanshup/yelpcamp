<% include ../partials/header %>
  <% include ../partials/errorMsg %>

    <div id="campgroundsContainer" class="container mt-4">
      <div class="row">
        <div class="col-md-3">
          <div class="d-none d-md-block">
            <div class="lead text-center text-capitalize">
              <%= campground.name %>
            </div>
            <div class="card shadow-sm mt-2">
              <div class="card-header">
                <i class="far fa-calendar-alt"></i> Booking Window
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-capitalize">
                  <%= campground.booking.start %> -
                    <%= campground.booking.end %>
                </li>
              </ul>
            </div>
            <% if (campground.tags[0] === "") { %>
              <% ; %>
                <% } else { %>
                  <div class="card shadow-sm mt-3">
                    <div class="card-header">
                      <i class="far fa-smile"></i> Amenities
                    </div>
                    <ul class="list-group list-group-flush">
                      <% for (var i = 0; i < campground.tags.length; i++) { %>
                        <li class="list-group-item text-capitalize">
                          <%= campground.tags[i] %>
                        </li>
                        <% } %>
                    </ul>
                  </div>
                  <% } %>
                    <div class="card shadow-sm mt-3">
                      <div class="card-header">
                        <i class="fas fa-phone"></i> Contact
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <%= campground.phone %>
                        </li>
                      </ul>
                    </div>
                    <div class="card shadow-sm mt-3">
                      <div id="map"></div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item"><i class="fas fa-map-marker-alt"></i>
                          <%= campground.location %>
                        </li>
                      </ul>
                    </div>
          </div>
        </div>
        <div class="col-md-9">
          <div class="card shadow-sm">
            <img class="card-img-top" src="<%= campground.image %>">
            <div class="card-body">
              <h5 class="card-title float-right">
              $<%= campground.price %>/Night</h5>
              <h5 class="card-title text-capitalize">
              <%= campground.name %>
              <div>
                <% if(campground.comments.length === 0) { %>
                  <small class="text-muted">No Reviews</small>
                <% } else { %>
                  <% var stars = ['<small><i class="far fa-star text-danger"></i></small>', '<small><i class="far fa-star text-danger"></i></small>', '<small><i class="far fa-star text-danger"></i></small>', '<small><i class="far fa-star text-danger"></i></small>', '<small><i class="far fa-star text-danger"></i></small>'] %>
                  <% for(var i = 0; i < Math.round(campground.rateAvg); i++) { %>
                      <% stars[i] = '<small><i class="fas fa-star text-danger"></i></small>' %>
                  <% } %>
                  <% for(var i = 0; i < stars.length; i++) { %>
                    <%- stars[i] %>
                  <% } %>
                  <% if (campground.comments.length === 1) { %>
                    <small class="text-muted"><%= campground.comments.length %> Review</small>
                  <% } else { %>
                    <small class="text-muted"><%= campground.comments.length %> Reviews</small>
                  <% } %>
                <% } %>
              </div>
            </h5>
              <p class="card-text">
                <%= campground.description %>
                  <div class="d-block d-sm-none d-none d-sm-block d-md-none">
                    <hr>
                    <h5 class="card-title"><i class="fas fa-map-marker-alt"></i> Location</h5>
                    <%= campground.location %>
                      <hr>
                      <h5 class="card-title text-capitalize"><i class="far fa-calendar-alt"></i> Booking Window</h5>
                      <%= campground.booking.start %> -
                        <%= campground.booking.end %>
                          <% if (campground.tags[0] === "") { %>
                            <% ; %>
                              <% } else { %>
                                <hr>
                                <h5 class="card-title">
                        <i class="far fa-smile"></i> Amenities
                      </h5>

                                <% for (var i = 0; i < campground.tags.length; i++) { %>
                                  <span class="badge badge-secondary text-capitalize"><%= campground.tags[i] %></span>
                                  <% } %>
                                    <% } %>
                                      <hr>
                                      <h5 class="card-title"><i class="fas fa-phone"></i> Contact</h5>
                                      <%= campground.phone %>
                  </div>
              </p>
              <hr>
              <p class="card-text text-muted">
                <span>Submitted by
                <a href="/users/<%= campground.author.id %>">
                  <%= campground.author.username %></a> on
                <%= moment(campground.createdAt).format('LL') %>
              </span>
              </p>
              <% if(currentUser && campground.author.id.equals(currentUser._id)) { %>
                <form id="deleteForm" action="/campgrounds/<%= campground._id %>?_method=DELETE" method="POST" class="float-right">
                  <button class="delBtn btn text-dark btn-lg">
                  <i class="fas fa-trash-alt"></i>
                </button>
                </form>
                <a href="/campgrounds/<%= campground._id %>/edit" class="btn text-dark btn-lg float-right">
                <i class="fas fa-pencil-alt"></i>
              </a>
                <% } %>
            </div>
          </div>
          <div class="card shadow-sm mt-4" id="comments">
            <ul class="list-group list-group-flush">
              <% if(currentUser && campground.author.id.equals(currentUser._id)) { %>
                <li id="commentItem" class="list-group-item list-group-item-light">
                  Your campground has
                  <% if (campground.comments.length === 0) { %>
                    no reviews.
                    <% } else if (campground.comments.length === 1) { %>
                      1 review
                      <% } else { %>
                        <%= campground.comments.length %> reviews
                          <% } %>
                </li>
                <% } else { %>
                  <li id="commentItem" class="list-group-item list-group-item-light">
                    <button class="btn btn-danger float-right" data-toggle="collapse" data-target="#collapseComment" aria-expanded="false" aria-controls="collapseComment">Leave a Review</button>
                  </li>
                  <% } %>
                    <div class="collapse" id="collapseComment">
                      <div class="card-body">
                        <form class="needs-validation" action="/campgrounds/<%= campground._id %>/comments" method="POST" novalidate>
                          <div class="form-group">
                            <textarea class="form-control" id="exampleFormControlTextarea1" name="comment[text]" rows="3" required></textarea>
                            <div class="invalid-feedback">
                              You cannot leave this part blank.
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="" class="mr-2">Rating: </label>
                            <div class="custom-control custom-radio custom-control-inline">
                              <input type="radio" id="customRadio1" name="comment[rating]" value="1" class="custom-control-input" required>
                              <label class="custom-control-label" for="customRadio1">1</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                              <input type="radio" id="customRadio2" name="comment[rating]" value="2" class="custom-control-input" required>
                              <label class="custom-control-label" for="customRadio2">2</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                              <input type="radio" id="customRadio3" name="comment[rating]" value="3" class="custom-control-input" required>
                              <label class="custom-control-label" for="customRadio3">3</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                              <input type="radio" id="customRadio4" name="comment[rating]" value="4" class="custom-control-input" required>
                              <label class="custom-control-label" for="customRadio4">4</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                              <input type="radio" id="customRadio5" name="comment[rating]" value="5" class="custom-control-input" required>
                              <label class="custom-control-label" for="customRadio5">5</label>
                            </div>
                            <div class="invalid-feedback">
                              Please provide a rating.
                            </div>
                          </div>
                          <button type="submit" class="btn btn-danger btn-sm">Submit</button>
                          <button type="reset" class="btn btn-secondary btn-sm float right">Reset</button>
                        </form>
                      </div>
                    </div>
                    <% campground.comments.forEach(function(comment){ %>
                      <li class="list-group-item">
                        <p>
                          <i class="fas fa-user"></i>
                          <a href="/users/<%= comment.author.id %>">
                            <%= comment.author.username %>
                          </a>
                          <span class="float-right text-muted">
                    <% var stars2 = ['<small><i class="far fa-star text-danger"></i></small>', '<small><i class="far fa-star text-danger"></i></small>', '<small><i class="far fa-star text-danger"></i></small>', '<small><i class="far fa-star text-danger"></i></small>', '<small><i class="far fa-star text-danger"></i></small>'] %>
                    <% for(var i = 0; i < comment.rating; i++) { %>
                        <% stars2[i] = '<small><i class="fas fa-star text-danger"></i></small>' %>
                    <% } %>
                    <% for(var i = 0; i < stars2.length; i++) { %>
                      <%- stars2[i] %>
                    <% } %>
                    <small><%= moment(comment.createdAt).fromNow() %></small>
                  </span>
                        </p>
                        <span class="text-muted">
                  <%- comment.text %>
                </span>
                        <% if(currentUser && comment.author.id.equals(currentUser._id)) { %>
                          <div class="float-right">
                            <a class="btn text-dark" data-toggle="collapse" data-target="#editComment" aria-expanded="false" aria-controls="editComment">
                      <i class="fas fa-pencil-alt"></i>
                    </a>
                            <form id="deleteForm2" action="/campgrounds/<%= campground._id %>/comments/<%= comment._id %>?_method=DELETE" method="POST" class="float-right">
                              <button class="delBtn btn text-dark">
                        <i class="fas fa-trash-alt"></i>
                      </button>
                            </form>
                          </div>
                          <div class="collapse" id="editComment">
                            <div class="card-body">
                              <form class="needs-validation" action="/campgrounds/<%= campground._id %>/comments/<%= comment._id %>?_method=PUT" method="POST" novalidate>
                                <div class="form-group">
                                  <textarea class="form-control" id="exampleFormControlTextarea1" name="comment[text]" rows="3" required><%= comment.text %></textarea>
                                  <div class="invalid-feedback">
                                    You cannot leave this part blank.
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label for="" class="mr-2">Rating: </label>
                                  <% for(var i = 1; i <= 5; i++) { %>
                                    <% if(comment.rating === i) { %>
                                      <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="customRadiow<%=[i]%>" name="comment[rating]" value="<%=[i]%>" class="custom-control-input" checked required>
                                        <label class="custom-control-label" for="customRadiow<%=[i]%>"><%=[i]%></label>
                                      </div>
                                      <% } else { %>
                                        <div class="custom-control custom-radio custom-control-inline">
                                          <input type="radio" id="customRadiow<%=[i]%>" name="comment[rating]" value="<%=[i]%>" class="custom-control-input" required>
                                          <label class="custom-control-label" for="customRadiow<%=[i]%>"><%=[i]%></label>
                                        </div>
                                        <% } %>
                                          <% } %>
                                            <div class="invalid-feedback">
                                              Please provide a rating.
                                            </div>
                                </div>
                                <button type="submit" class="btn btn-danger btn-sm">Edit Review</button>
                                <button type="reset" class="btn btn-secondary btn-sm float right">Reset</button>
                              </form>
                            </div>
                          </div>
                          <% } %>
                      </li>
                      <% }) %>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <script>
      function initMap() {
        var lat = <%= campground.lat %>;
        var lng = <%= campground.lng %>;
        var center = {
          lat: lat,
          lng: lng
        };
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 8,
          center: center,
          scrollwheel: false
        });
        var contentString = "<%= campground.location %>";
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        var marker = new google.maps.Marker({
          position: center,
          map: map
        });
        marker.addListener("click", function() {
          infowindow.open(map, marker);
        });
      }
    </script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDEgVKHwajPQq9PK-6ddk19KM83duXX8E0&callback=initMap"></script>

    <% include ../partials/footer %>