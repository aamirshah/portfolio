use Rack::Static,
  :urls => ['/images', '/js', '/css', '/bower_components', '/templates', '/fonts'],
  :root => 'build'

map '/' do
  run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('build/index.html', File::RDONLY)
  ]
}
end


map '/resume' do
  run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('build/resume.html', File::RDONLY)
  ]
}
end