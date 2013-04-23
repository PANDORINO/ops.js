Openphacts.ConceptWikiSearch = function(baseURL) {
	this.baseURL = baseURL;
}

Openphacts.ConceptWikiSearch.prototype.byTag = function(appID, appKey, query, limit, branch, type, callback) {
	var conceptWikiSearcher = $.ajax({
		url: this.baseURL + "/search/byTag",
		cache: true,
		data: {
			q: query,
			limit: limit,
			branch: branch,
			uuid: type,
			app_id: appID,
			app_key: appKey
		},
		success: function(response, status, request) {
			callback.call(this, true, request.status, response.result.primaryTopic.result);
		},
		error: function(request, status, error) {
			callback.call(this, false, request.status);
		}
	});
}

Openphacts.ConceptWikiSearch.prototype.findCompounds = function(appID, appKey, query, limit, branch, callback) {
	var conceptWikiSearcher = $.ajax({
		url: this.baseURL + "/search/byTag",
		cache: true,
		data: {
			q: query,
			limit: limit,
			branch: branch,
			uuid: '07a84994-e464-4bbf-812a-a4b96fa3d197',
			app_id: appID,
			app_key: appKey
		},
		success: function(response, status, request) {
			callback.call(this, true, request.status, response.result.primaryTopic.result);
		},
		error: function(request, status, error) {
			callback.call(this, false, request.status);
		}
	});
}

Openphacts.ConceptWikiSearch.prototype.findTargets = function(appID, appKey, query, limit, branch, callback) {
	var conceptWikiSearcher = $.ajax({
		url: this.baseURL + "/search/byTag",
		cache: true,
		data: {
			q: query,
			limit: limit,
			branch: branch,
			uuid: 'eeaec894-d856-4106-9fa1-662b1dc6c6f1',
			app_id: appID,
			app_key: appKey
		},
		success: function(response, status, request) {
			callback.call(this, true, request.status, response.result.primaryTopic.result);
		},
		error: function(request, status, error) {
			callback.call(this, false, request.status);
		}
	});
}

Openphacts.ConceptWikiSearch.prototype.parseResponse = function(response) {
	var uris = [];
	//response can be either array or singleton.
	if (response instanceof Array) {
		$.each(response, function(i, match) {
			uris.push({
				'uri': match["_about"],
				'prefLabel': match["prefLabel"],
				'match': match["match"]
			});
		});
	} else {
		uris.push({
			'uri': response["_about"],
			'prefLabel': response["prefLabel"],
			'match': response["match"]
		});
	}
	return uris;
}

Openphacts.ConceptWikiSearch.prototype.findConcept = function(appID, appKey, uuid, callback) {
	var conceptWikiSearcher = $.ajax({
		url: this.baseURL + "/getConceptDescription",
		cache: true,
		data: {
			uuid: uuid,
			app_id: appID,
			app_key: appKey
		},
		success: function(response, status, request) {
			callback.call(this, true, request.status, response.result.primaryTopic);
		},
		error: function(request, status, error) {
			callback.call(this, false, request.status);
		}
	});
}

Openphacts.ConceptWikiSearch.prototype.parseFindConceptResponse = function(response) {
    var prefLabel = response.prefLabel_en;
    var definition = response.definition;
    var altLabels = [];
    $.each(response.altLabel_en, function(index, altLabel) {
	    altLabels.push(altLabel);
    });
	return {
		prefLabel: prefLabel,
		definition: definition,
		altLabels: altLabels
	};
}
