task default: %w[serve]

desc "run the site"
task :serve do
  Rake::Task["buildAll"].invoke
  sh "cd _site && npx static-server-rdil"
end

desc "build the site"
task :buildAll do
  sh "jekyll build"
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
