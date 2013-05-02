describe("Compound search", function() {
  var searcher, appID, appKey;

  beforeEach(function() {
      appID = $.url().param('app_id');
      appKey = $.url().param('app_key');
      searcher = new Openphacts.CompoundSearch("https://beta.openphacts.org", appID, appKey);
  });

  describe("single compound search", function() {

    it("can be executed", function() {
      spyOn(searcher, 'fetchCompound');
      searcher.fetchCompound('compoundURI', 'callback');
      expect(searcher.fetchCompound).toHaveBeenCalled();
    });
    it("and return a response", function() {
      var callback=function(success, status, response){
        expect(success).toEqual(true);
        expect(status).toEqual(200);
        var compoundResult = searcher.parseCompoundResponse(response);
        expect(compoundResult.id).toBeDefined();
        expect(compoundResult.prefLabel).toBeDefined();
        expect(compoundResult.cwUri).toBeDefined();
        expect(compoundResult.description).toBeDefined();
        expect(compoundResult.biotransformationItem).toBeDefined();
        expect(compoundResult.toxicity).toBeDefined();
        expect(compoundResult.proteinBinding).toBeDefined();
        expect(compoundResult.csUri).toBeDefined();
        expect(compoundResult.hba).toBeDefined();
        expect(compoundResult.hbd).toBeDefined();
        expect(compoundResult.inchi).toBeDefined();
        expect(compoundResult.logp).toBeDefined();
        expect(compoundResult.psa).toBeDefined();
        expect(compoundResult.ro5Violations).toBeDefined();
        expect(compoundResult.smiles).toBeDefined();
        expect(compoundResult.chemblURI).toBeDefined();
        expect(compoundResult.fullMWT).toBeDefined();
        expect(compoundResult.molform).toBeDefined();
        expect(compoundResult.mwFreebase).toBeDefined();
        expect(compoundResult.rtb).toBeDefined();
      };
      searcher.fetchCompound('http://www.conceptwiki.org/concept/38932552-111f-4a4e-a46a-4ed1d7bdf9d5', callback);
    });
    it("executes asynchronously", function() {
      var callback = jasmine.createSpy();
      searcher.fetchCompound('http://www.conceptwiki.org/concept/38932552-111f-4a4e-a46a-4ed1d7bdf9d5', callback);
      waitsFor(function() {
          return callback.callCount > 0;
      });
      runs(function() {
          expect(callback).toHaveBeenCalled();
      });
    });
    it("and handle errors", function() {
      var callback=function(success, status){
        expect(success).toEqual(false);
        expect(status).toEqual(404);
      };
      searcher.fetchCompound('http://www.conceptwiki.org/concept/876876876', callback);
    });
  });
  describe("compound pharmacology search", function() {

    it("can be executed", function() {
      spyOn(searcher, 'compoundPharmacology');
      searcher.compoundPharmacology('compoundURI', 'page', 'pageSize', 'callback');
      expect(searcher.compoundPharmacology).toHaveBeenCalled();
    });
    it("and return a response", function() {
      var callback=function(success, status, response){
        expect(success).toEqual(true);
        expect(status).toEqual(200);
        var compoundResult = searcher.parseCompoundPharmacologyResponse(response);
        expect(compoundResult[0]).toBeDefined();
        expect(compoundResult[0].csid).toBeDefined();
      };
      searcher.compoundPharmacology('http://www.conceptwiki.org/concept/38932552-111f-4a4e-a46a-4ed1d7bdf9d5', 1, 20, callback);
    });
    it("executes asynchronously", function() {
      var callback = jasmine.createSpy();
      searcher.compoundPharmacology('http://www.conceptwiki.org/concept/38932552-111f-4a4e-a46a-4ed1d7bdf9d5', 1, 20, callback);
      waitsFor(function() {
          return callback.callCount > 0;
      });
      runs(function() {
          expect(callback).toHaveBeenCalled();
      });
    });
    it("and handle errors", function() {
      var callback=function(success, status){
        expect(success).toEqual(false);
        expect(status).toEqual(404);
      };
      searcher.compoundPharmacology('http://www.conceptwiki.org/concept/876876876', 1, 20, callback);
    });
  });
});
