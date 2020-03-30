#!/usr/bin/env ruby

# React Component Generator
#
# Usage:
#
# Create a component in the src/components dir:
# $ ./g c form-input
#
# Create a page in the src/pages dir:
# $ ./g p contact
#
# Create redux reducer/action/types files in the src/redux dir:
# $ ./g r cart
#
# Use snake-case.

COMPONENTS_DIR = './src/components'
PAGES_DIR = './src/pages'
REDUX_DIR = './src/redux'

component_type = ARGV[0]
component_filename = ARGV[1]

component_base_name = component_filename.split('-')
                        .map { |w| w.capitalize() }
                        .join('')

component_name = if component_type == 'p'
                   "#{component_base_name}Page"
                 else
                   component_base_name
                 end

component_output_filename = "#{component_filename}.js";
styles_output_filename = "#{component_filename}.scss";

def write_template(d, fname, content)
  File.open("#{d}/#{fname}", 'w') { |f| f.write(content) }
end

# This is the template for a React component.
component_template = %Q[
import React from "react";

import "./#{component_filename}.scss";

const #{component_name} = () => (
    <div className="#{component_filename}">#{component_name}</div>
);

export default #{component_name};
].strip()

# This is the template for the component's scss file.
styles_template = %Q[
.#{component_filename} {

}
].strip()

reducer_template = %Q[
import { #{component_name}ActionTypes } from "./#{component_filename}.types";
].strip()

actions_template = %Q[
import { #{component_name}ActionTypes } from "./#{component_filename}.types";
].strip()

types_template = %Q[
export const #{component_name}ActionTypes = {

};
].strip()

if component_type == 'p'
  dirname = "#{PAGES_DIR}/#{component_filename}"
elsif component_type == 'r'
  dirname = "#{REDUX_DIR}/#{component_filename}"
else
  dirname = "#{COMPONENTS_DIR}/#{component_filename}"
end

unless Dir.exist?(dirname)
  Dir.mkdir(dirname)
  # write redux files
  if component_type == 'r'
    write_template(dirname, "#{component_filename}.reducer.js", reducer_template)
    write_template(dirname, "#{component_filename}.actions.js", actions_template)
    write_template(dirname, "#{component_filename}.types.js", types_template)
    write_template(dirname, "#{component_filename}.selectors.js", "");
    write_template(dirname, "#{component_filename}.utils.js", "");
    puts "created Redux files at #{dirname}"
  else
    # write component files
    write_template(dirname, component_output_filename, component_template)
    write_template(dirname, styles_output_filename, styles_template)
    puts "created React component files at #{dirname}"
  end
else
  puts "files already exist at #{dirname}!"
end
