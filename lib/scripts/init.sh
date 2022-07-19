sed -n '4p' $1 | cut -c3- | sed 's/.*/{ "data": "&" }/' > /Users/thomas-delalande/Library/Application\ Support/Übersicht/widgets/current-task/data.json

