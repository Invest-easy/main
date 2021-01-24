import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    SafeAreaView,
    View,
    TouchableOpacity,
    Button,
    ScrollView,
  } from "react-native";

export default class Conditions extends React.Component {
  render() {
    return (
        <SafeAreaView style={{ flex: 1, marginLeft: "3%", marginRight: "3%" }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 2640 }}>
          <Text style={{ textAlign: "justify", marginTop: "3%" }}>
            Les présentes conditions générales d'utilisation (dites «CGU») ont
            pour objet l'encadrement juridique des modalités de mise à
            disposition du site et des services par InvestEZ et de définir les
            conditions d’accès et d’utilisation desservices par «l'Utilisateur».
          </Text>
          <Text style={{ textAlign: "justify" }}>
            Les présentes CGU sont accessibles sur l'application à la rubrique
            «Conditions Générales».
          </Text>
          <Text style={{ textAlign: "justify", marginTop: "3%" }}>
            Toute inscription ou utilisation du site implique l'acceptation sans
            aucune réserve ni restriction des présentes CGU par l’utilisateur.
            Lors de l'inscription sur le site via le Formulaire d’inscription,
            chaque utilisateur accepte expressément les présentes CGU en cochant
            la case précédant le texte suivant:
          </Text>
          <Text style={{ textAlign: "justify", fontWeight: "500" }}>
            « Je reconnais avoir lu et compris les CGU et je les accepte».
          </Text>
          <Text style={{ textAlign: "justify", marginTop: "3%" }}>
            En cas de non-acceptation des CGUstipulées dans le présent contrat,
            l'Utilisateur se doit de renoncer à l'accès des services proposés
            par l'application. InvestEZ se réserve le droit de modifier
            unilatéralement et à tout moment le contenu des présentes CGU.
          </Text>

          <Text
            style={{
              textAlign: "justify",
              marginTop: "9%",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            ARTICLE 1: Mentions légales
          </Text>
          <Text style={{ textAlign: "justify", marginTop: "3%" }}>
            L'édition du site (indiquer le nom du site) est assurée par la
            Société (indiquer le nom de la société et la forme sociale) au
            capital de (indiquer le montant), immatriculée au RCS de (indiquer
            la ville) sous le numéro (indiquer le SIREN)dont le siège social est
            situé au (indiquer l’adresse), (indiquer le numéro de téléphone),
            (indiquer l’adresse email)
          </Text>

          <Text
            style={{
              textAlign: "justify",
              marginTop: "9%",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            ARTICLE 2: Accès à l'application
          </Text>
          <Text style={{ textAlign: "justify", marginTop: "3%" }}>
            L'application InvestEZ permet à l'Utilisateur un accès gratuit aux
            services suivants: .......
          </Text>
          <Text style={{ textAlign: "justify", marginTop: "3%" }}>
            L'application est accessible gratuitement en tout lieu à tout
            Utilisateur ayant un accès à Internet. Tous les frais supportés par
            l'Utilisateur pour accéder au service (matériel informatique,
            logiciels, connexion Internet, etc.) sont à sa charge.
          </Text>
          <Text
            style={{
              textAlign: "justify",
              marginTop: "4%",
              fontWeight: "200",
              fontSize: 15,
            }}
          >
            Espace membre :
          </Text>
          <Text style={{ textAlign: "justify" }}>
            L’Utilisateur non membre n'a pas accès aux services réservés. Pour
            cela, il doit s’inscrire en remplissant le formulaire. En acceptant
            de s’inscrire aux services réservés, l’Utilisateur membre s’engage à
            fournir des informations sincères et exactes concernant son état
            civil et ses coordonnées, notamment son adresse email.
          </Text>
          <Text style={{ textAlign: "justify" }}>
            L’Utilisateur est responsable de la mise à jour des informations
            fournies. Il lui est précisé qu’il peut les modifier en se
            connectant à son espace membre.
          </Text>
          <Text style={{ textAlign: "justify" }}>
            Pour accéder aux services, l’Utilisateur devra s'identifier à l'aide
            de son nom d’utilisateur et de son mot de passe qui lui seront
            communiqués après son inscription et qui sont strictement
            personnels. A ce titre, il s’en interdit toute divulgation. Dans le
            cas contraire, il restera seul responsable de l’usage qui en sera
            fait. L’Utilisateur pourra également solliciter sa désinscription en
            se rendant à la page dédiée sur son espace personnel ou envoyant un
            email à: (préciser l’adresse). Celle-ci sera effective dans un délai
            raisonnable. En cas de non respect des conditions générales de vente
            et/ou d’utilisation, le site (Indiquer le nom du site) aura la
            possibilité de suspendre voire de fermer le compte d’un Utilisateur
            après mise en demeure adressée par voie électronique et restée sans
            effet. Toute suppression de compte, quel qu’en soit le motif,
            engendre la suppression pure et simple de toutes informations
            personnelles de l’Utilisateur. Tout événement dû à un cas de force
            majeure ayant pour conséquence un dysfonctionnement du site ou
            serveur et sous réserve de toute interruption ou modification en cas
            de maintenance, n'engage pas la responsabilité de (indiquer le nom
            du site). Dans ces cas, l’Utilisateur accepte ainsi ne pas tenir
            rigueur à l’éditeur de toute interruption ou suspension de service,
            même sans préavis. L'Utilisateur a la possibilité de contacter le
            site par messagerie électronique à l’adresse email de l’éditeur
            communiqué à l’ARTICLE 1.
          </Text>

          <Text
            style={{
              textAlign: "justify",
              marginTop: "9%",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            ARTICLE 3: Données personnelles
          </Text>
          <Text style={{ textAlign: "justify", marginTop: "3%" }}>
            Le site assure à l'Utilisateur une collecte et un traitement
            d'informations personnelles dans le respect de la vie privée
            conformément à la loi n°78-17 du 6 janvier 1978 relative à
            l'informatique, aux fichiers et aux libertés. Le site est déclaré à
            la CNIL sous le numéro (indiquer le numéro de déclaration). En vertu
            de la loi Informatique et Libertés, en date du 6 janvier 1978,
            l'Utilisateur dispose d'un droit d'accès, de rectification, de
            suppression et d'opposition de ses données personnelles.
            L'Utilisateur exerce ce droit:•par mail à (indiquer l’adresse)•par
            voie postale (indiquer le nom et l’adresse) •via un formulaire de
            contact •via son espace personnel
          </Text>

          <Text
            style={{
              textAlign: "justify",
              marginTop: "9%",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            ARTICLE 4: Propriété intellectuelle
          </Text>
          <Text style={{ textAlign: "justify", marginTop: "3%" }}>
            Les marques, logos, signes ainsi que tous les contenus du site
            (textes, images, son...) font l'objet d'une protection par le Code
            de la propriété intellectuelle et plus particulièrement par le droit
            d'auteur. L'Utilisateur doit solliciterl'autorisation préalable du
            site pour toute reproduction, publication, copie des différents
            contenus.Ils'engage à une utilisation des contenus du site dans un
            cadre strictement privé, toute utilisation à des fins commerciales
            et publicitaires est strictement interdite.Toute représentation
            totale ou partielle de ce site par quelque procédé que ce soit, sans
            l’autorisation expresse de l’exploitant du site Internet
            constituerait une contrefaçon sanctionnée par l’article L 335-2 et
            suivants du Code de la propriété intellectuelle.Il est rappelé
            conformément à l’article L122-5 du Code de propriété intellectuelle
            que l’Utilisateur qui reproduit, copie ou publie le contenu protégé
            doit citer l’auteur et sa source.
          </Text>

          <Text
            style={{
              textAlign: "justify",
              marginTop: "9%",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            ARTICLE 5 : Responsabilité
          </Text>
          <Text style={{ textAlign: "justify", marginTop: "3%" }}>
            Les sources des informations diffusées sur le site (indiquerle nom
            du site) sont réputées fiables mais le site ne garantit pas qu’il
            soit exempt de défauts, d’erreurs ou d’omissions.Les informations
            communiquées sont présentées à titre indicatif et général sans
            valeur contractuelle. Malgré des mises à jour régulières, le site
            (indiquer le nom du site) ne peut être tenu responsable de la
            modification desdispositions administratives et juridiques survenant
            après la publication. De même, lesitene peut être tenue responsable
            de l’utilisation et de l’interprétationde l’information contenue
            dans ce site.
          </Text>
          <Text
            style={{
              textAlign: "justify",
              marginTop: "4%",
              fontWeight: "200",
              fontSize: 15,
            }}
          >
            Espace membre :
          </Text>
          <Text style={{ textAlign: "justify", marginTop: "3%" }}>
            L'Utilisateur s'assure de garder son mot de passe secret. Toute
            divulgation du mot de passe, quelle que soit sa forme, est
            interdite. Il assume les risques liés à l'utilisation de son
            identifiant et mot de passe. Le site décline toute responsabilité.
            Le site (indiquer le nom du site) ne peut être tenupour responsable
            d’éventuels virus qui pourraient infecter l’ordinateur ou tout
            matériel informatique de l’Internaute, suite à une utilisation, à
            l’accès, ou au téléchargement provenant de ce site. La
            responsabilité du site ne peut être engagée en cas de force majeure
            ou du fait imprévisible et insurmontable d'un tiers.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
})