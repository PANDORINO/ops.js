//This content is released under the MIT License, http://opensource.org/licenses/MIT. See licence.txt for more details.
/**
 * Main container of the OPS.js library. It is the parent class for all the components.
 * 
 * @namespace
 * @license [MIT]{@link http://opensource.org/licenses/MIT}
 * @author Ian Dunlop 
 */
var Openphacts = Openphacts || {};
/**
 * General callback for any request
 * @callback requestCallback
 * @param {Boolean} success - True or False
 * @param {Number} status - HTTP status code
 * @param {string} response - Response message
 */
/**
 * Contains data for a compound fetched with {@link Openphacts.CompoundSearch#fetchCompound}
 * @typedef {Object} FetchCompoundResponse
 * @property {string} cwURI - Concept Wiki URI which represents the compound
 * @property {string} prefLabel - The preferred label for the compound
 * @property {string} URI - The URI for the compound
 * @property {string} description - A description of the compound
 * @property {string} biotransformationItem - The biotransformation item for the compound
 * @property {string} toxicity - The toxicity of the compound
 * @property {string} proteinBinding - The protein binding for the compound
 * @property {string} csURI - ChemSpider URI
 * @property {string} hba - hba
 * @property {string} hbd -hbd
 * @property {string} inchi - inchi
 * @property {string} logp - logp
 * @property {string} psa - psa
 * @property {string} ro5Violations - ro5Violations
 * @property {string} smiles - smiles
 * @property {string} chemblURI - chemblURI
 * @property {string} fullMWT - fullMWT
 * @property {string} molform - molform
 * @property {string} mwFreebase - mwFreebase
 * @property {string} rtb - rtb
 * @property {string} inchiKey - inchiKey
 * @property {string} drugbankURI - drugbankURI
 * @property {string} drugbankProvenance - drugbankProvenance
 * @property {string} chemspiderProvenance - chemspiderProvenance
 * @property {string} chemblProvenance - chemblProvenance
 */
/**
 * Compounds fetched with {@link Openphacts.CompoundSearch#fetchCompounds}
 * @typedef {Array.<FetchCompoundResponse>} FetchCompoundsResponse
 */

/**
 * An array of pharmacology records for a compound returned from {@link Openphacts.CompoundSearch#compoundPharmacology}
 * @typedef {Array.<Object>} FetchCompoundPharmacologyResponse
 * @property {string} compoundInchikey - compound_inchikey
 * @property {string} compoundDrugType - compound_drug_type
 * @property {string} compoundGenericName - compound_generic_name
 * @property {Array} targets - targets
 * @property {string} compoundInchikeySrc - cs_src
 * @property {string} compoundDrugTypeSrc - drugbank_src
 * @property {string} compoundGenericNameSrc - drugbank_src
 * @property {string} targetTitleSrc - chembl_src
 * @property {string} chemblActivityUri - chembl_activity_uri
 * @property {string} chemblCompoundUri - chembl_compound_uri
 * @property {string} compoundFullMwt - compound_full_mwt
 * @property {string} cwCompoundUri - cw_compound_uri
 * @property {string} compoundPrefLabel - compound_pref_label
 * @property {string} csCompoundUri - cs_compound_uri
 * @property {string} csid - csid
 * @property {string} compoundInchi - compound_inchi
 * @property {string} compoundSmiles - compound_smiles
 * @property {string} chemblAssayUri - chembl_assay_uri
 * @property {Array} targetOrganisms - target_organisms
 * @property {string} assayOrganism - assay_organism
 * @property {string} assayDescription - assay_description
 * @property {string} activityRelation - activity_relation
 * @property {string} activityStandardUnits - activity_standard_units
 * @property {string} activityStandardValue - activity_standard_value
 * @property {string} activityActivityType - activity_activity_type
 * @property {string} activityValue - activity_activity_value
 * @property {string} compoundFullMwtSrc - chembl_src
 * @property {string} compoundPrefLabel_src - cw_src
 * @property {string} compoundInchiSrc - cs_src
 * @property {string} compoundSmilesSrc - cs_src
 * @property {string} targetOrganismSrc - chembl_src
 * @property {string} assayOrganismSrc - chembl_src
 * @property {string} assayDescriptionSrc - chembl_src
 * @property {string} activityRelationSrc - chembl_src
 * @property {string} activityStandardUnitsSrc - chembl_src
 * @property {string} activityStandardValueSrc - chembl_src
 * @property {string} activityActivityTypeSrc - chembl_src
 * @property {string} activityPubmedId - activity_pubmed_id
 * @property {string} assayDescriptionItem - assay_description_item
 * @property {string} assayOrganismItem - assay_organism_item
 * @property {string} activityActivityTypeItem - activity_activity_type_item
 * @property {string} activityRelationItem - activity_relation_item
 * @property {string} activityStandardValueItem - activity_standard_value_item
 * @property {string} activityStandardUnitsItem - activity_standard_units_item
 * @property {string} compoundFullMwtItem - compound_full_mwt_item
 * @property {string} compoundSmilesItem - compound_smiles_item
 * @property {string} compoundInchiItem - compound_inchi_item
 * @property {string} compoundInchikeyItem - compound_inchikey_item
 * @property {string} compoundPrefLabelItem - compound_pref_label_item
 * @property {string} pChembl - pChembl
 * @property {string} chemblProvenance - chemblProvenance
 */
/**
 * Contains data for a target fetched with {@link Openphacts.TargetSearch#fetchTarget}
 * @typedef {Object} FetchTargetResponse
 * @property {string} cellularLocation - cellularLocation
 * @property {string} molecularWeight - molecularWeight
 * @property {string} numberOfResidues - numberOfResidues
 * @property {string} theoreticalPi - theoreticalPi
 * @property {string} drugbankURI - drugbankURI
 * @property {Array} keywords- keywords
 * @property {string} functionAnnotation - functionAnnotation
 * @property {string} alternativeName - alternativeName
 * @property {string} existence - existence
 * @property {string} organism - organism
 * @property {string} sequence - sequence
 * @property {Array} classifiedWith - classifiedWith
 * @property {Array} seeAlso - seeAlso
 * @property {string} prefLabel - prefLabel
 * @property {string} chemblItems - chemblItems
 * @property {string} cwURI - cwURI
 * @property {string} URI - URI
 * @property {string} chemblProvenance - chemblProvenance
 * @property {string} drugbankProvenance - drugbankProvenance
 * @property {string} uniprotProvenance - uniprotProvenance
 * @property {string} conceptwikiProvenance - conceptwikiProvenance
 * @property {Array.<TargetForDrugs>} targetForDrugs - targetForDrugs
 */
/**
 * Targets fetched with {@link Openphacts.TargetSearch#fetchTargets}
 * @typedef {Array.<FetchTargetResponse>} FetchTargetsResponse
 */

/**
 * Drugs associated with a particular target.
 * @typedef {Object} TargetForDrugs
 * @property {string} name - Generic name of the drug
 * @property {string} url - URL where the drug information came from
 * @property {Array.<string>} type - The drug types eg. 'approved', 'small molecule', 'investigational'
 */

