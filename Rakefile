task default: %w[serve]

desc "run the site"
task :serve do
  sh "jekyll s"
end

desc "build the site"
task :buildBase do
  sh "jekyll build"
end

desc "build the site and all node components"
task :buildAll do
  Rake::Task["buildBase"].invoke
  Rake::Task["buildNodeComponents"].invoke
end

desc "update bulma"
task :bulma do
  sh "cd _sass && rm -rf bulma && git clone https://github.com/jgthms/bulma.git && cd bulma && rm -rf .git"
end

desc "build node components"
task :buildNodeComponents do
  sh "cd cherry && yarn && yarn build && cd .. && cp -r cherry/build _site/cherry"
end
