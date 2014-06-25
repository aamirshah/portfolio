use Rack::Static,
  :urls => ['/css', '/fonts', '/images', '/js', '/templates'],
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


map '/resume.html' do
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

map '/sitemap.xml' do
  run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('build/sitemap.xml', File::RDONLY)
  ]
}
end