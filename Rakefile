task default: %w[serve]

desc "run the site"
task :serve do
  sh "jekyll s"
end

desc "build the site"
task :build do
  sh "jekyll build"
end

desc "update bulma"
task :bulma do
  sh "cd _sass && rm -rf bulma && git clone https://github.com/jgthms/bulma.git && cd bulma && rm -rf .git"
end
